import { env } from '$env/dynamic/private';
import { JWT_TOKEN_COOKIE_NAME } from '$lib/constant';
import prisma, { getEnhancedPrisma } from '$lib/prisma';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import zenstack from '@zenstackhq/server/sveltekit';
import jwt from 'jsonwebtoken';

const auth = (async ({ event, resolve }) => {
    const token = event.cookies.get(JWT_TOKEN_COOKIE_NAME);
    if (token) {
        try {
            const decoded = jwt.verify(token, env.JWT_SECRET);
            const user = await prisma.user.findUnique({
                where: { id: decoded.sub as string },
            });
            if (user) {
                event.locals.user = user;
            } else {
                console.warn('User not found:', decoded.sub);
                event.cookies.delete(JWT_TOKEN_COOKIE_NAME, { path: '/' });
            }
        } catch {
            event.cookies.delete(JWT_TOKEN_COOKIE_NAME, { path: '/' });
        }
    }

    event.locals.db = getEnhancedPrisma(
        event.locals.user ? event.locals.user.id : undefined
    );

    return resolve(event);
}) satisfies Handle;

const crud = zenstack.ZenStackSvelteKitHandler({
    prefix: '/api/model',
    getPrisma: (event) => event.locals.db,
});

export const handle = sequence(auth, crud);
