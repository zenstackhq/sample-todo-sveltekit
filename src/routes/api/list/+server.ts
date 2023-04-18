import { error, json, type RequestHandler } from '@sveltejs/kit';
import { isPrismaClientKnownRequestError } from '@zenstackhq/runtime';
import z, { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

const schema = z.object({
    spaceId: z.string(),
    title: z.string(),
    private: z.boolean().optional(),
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
    const { title, spaceId, private: _private } = parsedInput;

    try {
        await locals.db.list.create({
            data: {
                owner: { connect: { id: locals.user.id } },
                space: { connect: { id: spaceId } },
                title,
                private: _private,
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
