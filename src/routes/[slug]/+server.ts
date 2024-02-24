
import { error,  redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { createDBConnection } from "$lib/db/db";
import { getIdFromSlug } from "$lib/utils";


export const GET: RequestHandler = async ({url}) => {
  const slug = url.pathname.replace('/', '')

  const {numbers, letters} = getIdFromSlug(slug)

  if (!numbers || !letters) error(404, 'Ups, sorry. De link gids leider ned.')

  const connection = await createDBConnection();
  let redirectUrl: string
  try {
    const sql = 'SELECT original_url FROM `Link` WHERE `id` = ? AND `slug` = ?';
    const values = [numbers, letters];
  
    const [result] = await connection.execute(sql, values);

    //@ts-expect-error result is an array
    if (result.length === 0) error(404, 'Ups, sorry. De link gids leider ned.')
    //@ts-expect-error result is an array
    redirectUrl = result[0].original_url
  } catch (err) {
    console.error(err);
    error(500, 'Uuups, da isch öppis ned so guet.')
  } finally {
     connection.end()
  }
  redirect(303, redirectUrl)
};