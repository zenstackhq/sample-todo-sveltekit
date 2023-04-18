import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
    const list = await locals.db.list.findUnique({
        where: { id: params?.listId as string },
    });
    if (!list) {
        throw error(404, 'List not found');
    }

    const todos = await locals.db.todo.findMany({
        where: { listId: params?.listId as string },
        include: {
            owner: true,
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });
    return { list, todos };
}) satisfies PageServerLoad;

export const actions = {
    create: async ({ request, locals, params }) => {
        const data = await request.formData();
        const title = data.get('title') as string;
        await locals.db.todo.create({
            data: {
                title,
                list: { connect: { id: params.listId } },
                owner: { connect: { id: locals.user!.id } },
            },
        });
    },

    complete: async ({ request, locals }) => {
        const data = await request.formData();
        const todoId = data.get('todoId') as string;
        const completed = data.get('completed') as string;
        await locals.db.todo.update({
            where: { id: todoId },
            data: { completedAt: completed === 'on' ? new Date() : null },
        });
    },

    delete: async ({ request, locals }) => {
        const data = await request.formData();
        const todoId = data.get('todoId') as string;
        await locals.db.todo.delete({ where: { id: todoId } });
    },
} satisfies Actions;
