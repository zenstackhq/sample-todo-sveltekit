import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
    const lists = await locals.db.list.findMany({
        where: {
            space: { slug: params.slug },
        },
        include: {
            owner: true,
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });

    const members = locals.db.spaceUser.findMany({
        where: {
            space: { slug: params.slug },
        },
        include: {
            user: true,
        },
        orderBy: {
            role: 'desc',
        },
    });

    return {
        lists,
        members,
    };
}) satisfies PageServerLoad;
