import { env } from '$env/dynamic/private';
import type { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export function createToken(user: User) {
    return jwt.sign(
        {
            sub: user.id,
            email: user.email,
        },
        env.JWT_SECRET,
        { expiresIn: '7d' }
    );
}
