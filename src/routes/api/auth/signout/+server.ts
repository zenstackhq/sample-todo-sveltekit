import { JWT_TOKEN_COOKIE_NAME } from '$lib/constant';
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const POST = (({ cookies }) => {
    cookies.delete(JWT_TOKEN_COOKIE_NAME, { path: '/' });
    throw redirect(303, '/signin');
}) satisfies RequestHandler;
