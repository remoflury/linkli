import { z } from 'zod';


// TODO: Debug Min length throwing an error
export const urlInputSchema = z.object({
	url: z
		.string({ required_error: 'Du muesch denk scho en Url schriibe.' })
    .min(4, { message: 'Mach mal en chli längeri Url.' })
    .trim()
    .refine(s => !s.includes(' '), 'Nene, kei Leerzeiche.')
});