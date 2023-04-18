import { SpaceUserRole } from '@prisma/client';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import { isPrismaClientKnownRequestError } from '@zenstackhq/runtime';
import z, { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

const schema = z.object({
    email: z.string().email(),
    spaceId: z.string(),
    role: z.nativeEnum(SpaceUserRole),
});

export const POST = (async ({ request, locals }) => {
    if (!locals.user) {
        throw error(401, 'Unauthorized');
    }

    let parsedInput: z.infer<typeof schema>;
    try {
        parsedInput = schema.parse(await request.json());
    } catch (err) {
        if (err instanceof ZodError) {
            throw error(400, fromZodError(err).message);
        } else {
            throw err;
        }
    }
    const { email, role, spaceId } = parsedInput;

    try {
        await locals.db.spaceUser.create({
            data: {
                user: { connect: { email } },
                space: { connect: { id: spaceId } },
                role,
            },
        });
    } catch (err) {
        if (isPrismaClientKnownRequestError(err) && err.code === 'P2025') {
            throw error(404, 'User or space not found');
        } else {
            throw err;
        }
    }
    return json({ success: true });
}) satisfies RequestHandler;
