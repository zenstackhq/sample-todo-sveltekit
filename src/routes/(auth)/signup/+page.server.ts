import { createToken } from '$lib/auth';
import { JWT_TOKEN_COOKIE_NAME } from '$lib/constant';
import { getEnhancedPrisma } from '$lib/prisma';
import { SpaceUserRole } from '@prisma/client';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { isPrismaClientKnownRequestError } from '@zenstackhq/runtime';
import { nanoid } from 'nanoid';

export const actions = {
    default: async ({ request, cookies, locals }) => {
        const data = await request.formData();

        const email = data.get('email');
        const password = data.get('password');

        if (typeof email !== 'string' || typeof password !== 'string') {
            return fail(400, { email, password, missing: true });
        }

        let db = locals.db;

        try {
            // create the user together with a default space
            const user = await db.user.create({
                data: {
                    email,
                    password,
                },
            });

            // use db under the context of the new user
            db = getEnhancedPrisma(user.id);

            const space = await db.space.create({
                data: {
                    name: `My Space`,
                    slug: nanoid(8),
                    owner: { connect: { id: user.id } },
                    members: {
                        create: {
                            user: { connect: { id: user.id } },
                            role: SpaceUserRole.ADMIN,
                        },
                    },
                },
            });
            console.log('Space created for user:', space);

            const token = createToken(user);
            cookies.set(JWT_TOKEN_COOKIE_NAME, token, {
                httpOnly: true,
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                path: '/',
            });
        } catch (err) {
            if (isPrismaClientKnownRequestError(err) && err.code === 'P2002') {
                return fail(400, { email, password, dup: true });
            } else {
                throw err;
            }
        }

        throw redirect(303, `/`);
    },
} satisfies Actions;
