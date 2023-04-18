import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
    const space = await locals.db.space.findUnique({
        where: { slug: params.slug },
    });
    if (!space) {
        throw error(404, 'Space not found');
    }
    return { space };
}) satisfies LayoutServerLoad;
