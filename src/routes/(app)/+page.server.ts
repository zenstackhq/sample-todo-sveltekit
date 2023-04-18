import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const spaces = await locals.db.space.findMany({
        orderBy: { createdAt: 'desc' },
    });
    return { user: locals.user!, spaces };
}) satisfies PageServerLoad;
