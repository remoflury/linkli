import { urlInputSchema } from "$lib/zod";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from "./$types";
import { createRandomString } from "$lib/utils";
import { createDBConnection } from "$lib/db/db";

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(urlInputSchema))
  // Unless you throw, always return { form } in load and form actions.
  return { form };
};

export const actions: Actions = {
  create: async ({request, url}) => {
    const form = await superValidate(request, zod(urlInputSchema));

    if (!form.valid) return message(form, form.errors?.url?.[0] ?? 'Uuups, da isch öppis schief gange.')

    const connection = await createDBConnection();
    const randomString = createRandomString(4);
    let insertId: number
    try {
      const sql = 'INSERT INTO `Link`(`slug`, `original_url`) VALUES (?, ?)';
      const values = [randomString.toLowerCase(), form.data.url];
    
      const [result] = await connection.execute(sql, values);
    
      //@ts-expect-error insertId is not in the type definitionq
      insertId = result.insertId;
    } catch (err) {
      console.error(err);
      return message(form, 'Uuups, da isch öppis schief gange.', { status: 500 })
    } finally {
       connection.end()
    }

    const shortenedUrl = `${url.origin}/${insertId}${randomString}`

    return {
      form,
      shortenedUrl
    }
  }
};