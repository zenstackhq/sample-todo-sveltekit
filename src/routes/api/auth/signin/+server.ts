import { createToken } from '$lib/auth';
import { JWT_TOKEN_COOKIE_NAME } from '$lib/constant';
import prisma from '$lib/prisma';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

export const POST = (async ({ request, cookies }) => {
    const { email, password } = await request.json();

    if (typeof email !== 'string' || typeof password !== 'string') {
        throw error(400, 'Invalid credentials');
    }

    const user = await prisma.user.findFirst({
        where: { email },
    });
    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw error(401, 'Invalid credentials');
    }

    const token = createToken(user);
    cookies.set(JWT_TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        path: '/',
    });
    return json({ success: true, data: user });
}) satisfies RequestHandler;
