import { SpaceUserRole, type Space } from '@prisma/client';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { isPrismaClientKnownRequestError } from '@zenstackhq/runtime';

export const actions = {
    default: async ({ request, locals }) => {
        if (!locals.user) {
            throw error(401, 'Unauthorized');
        }

        const data = await request.formData();
        const name = data.get('name');
        const slug = data.get('slug');

        if (typeof name !== 'string' || typeof slug !== 'string') {
            return fail(400, { name, slug, missing: true });
        }

        let space: Space;
        try {
            space = await locals.db.space.create({
                data: {
                    name,
                    slug,
                    members: {
                        create: {
                            user: { connect: { id: locals.user.id } },
                            role: SpaceUserRole.ADMIN,
                        },
                    },
                },
            });
        } catch (err) {
            if (isPrismaClientKnownRequestError(err) && err.code === 'P2002') {
                return error(400, 'Space slug already in use');
            } else {
                throw err;
            }
        }

        throw redirect(303, `/space/${space.slug}`);
    },
} satisfies Actions;
