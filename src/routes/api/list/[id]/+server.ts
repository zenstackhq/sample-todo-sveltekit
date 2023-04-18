import { json, type RequestHandler } from '@sveltejs/kit';

export const DELETE = (async ({ params, locals }) => {
    await locals.db.list.delete({ where: { id: params.id } });
    return json({ success: true });
}) satisfies RequestHandler;
