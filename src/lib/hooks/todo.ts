/* eslint-disable */
import type { Prisma, Todo } from '@prisma/client';
import { getContext } from 'svelte';
import { derived } from 'svelte/store';
import type { MutationOptions, QueryOptions } from '@tanstack/svelte-query';
import { SvelteQueryContextKey, type RequestHandlerContext } from './_helper';
import { query, postMutation, putMutation, deleteMutation } from './_helper';

export function useCreateTodo(
    options?: Omit<MutationOptions<Todo, unknown, Prisma.TodoCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = postMutation<Prisma.TodoCreateArgs, Todo>(
        'Todo',
        `${endpoint}/todo/create`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.TodoCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoCreateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Todo,
                Prisma.TodoGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useCreateManyTodo(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = postMutation<Prisma.TodoCreateManyArgs, Prisma.BatchPayload>(
        'Todo',
        `${endpoint}/todo/createMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.TodoCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.TodoCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManyTodo<T extends Prisma.TodoFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>,
    options?: QueryOptions<Array<Prisma.TodoGetPayload<T>>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Array<Prisma.TodoGetPayload<T>>>('Todo', `${endpoint}/todo/findMany`, args, options);
}

export function useFindUniqueTodo<T extends Prisma.TodoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>,
    options?: QueryOptions<Prisma.TodoGetPayload<T>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Prisma.TodoGetPayload<T>>('Todo', `${endpoint}/todo/findUnique`, args, options);
}

export function useFindFirstTodo<T extends Prisma.TodoFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoFindFirstArgs>,
    options?: QueryOptions<Prisma.TodoGetPayload<T>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Prisma.TodoGetPayload<T>>('Todo', `${endpoint}/todo/findFirst`, args, options);
}

export function useUpdateTodo(
    options?: Omit<MutationOptions<Todo, unknown, Prisma.TodoUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = putMutation<Prisma.TodoUpdateArgs, Todo>(
        'Todo',
        `${endpoint}/todo/update`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.TodoUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Todo,
                Prisma.TodoGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useUpdateManyTodo(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = putMutation<Prisma.TodoUpdateManyArgs, Prisma.BatchPayload>(
        'Todo',
        `${endpoint}/todo/updateMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.TodoUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.TodoUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertTodo(
    options?: Omit<MutationOptions<Todo, unknown, Prisma.TodoUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = postMutation<Prisma.TodoUpsertArgs, Todo>(
        'Todo',
        `${endpoint}/todo/upsert`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.TodoUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Todo,
                Prisma.TodoGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteTodo(
    options?: Omit<MutationOptions<Todo, unknown, Prisma.TodoDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = deleteMutation<Prisma.TodoDeleteArgs, Todo>(
        'Todo',
        `${endpoint}/todo/delete`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.TodoDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Todo, Prisma.TodoGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Todo,
                Prisma.TodoGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteManyTodo(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.TodoDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = deleteMutation<Prisma.TodoDeleteManyArgs, Prisma.BatchPayload>(
        'Todo',
        `${endpoint}/todo/deleteMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.TodoDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.TodoDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateTodo<T extends Prisma.TodoAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoAggregateArgs>,
    options?: QueryOptions<Prisma.GetTodoAggregateType<T>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Prisma.GetTodoAggregateType<T>>('Todo', `${endpoint}/todo/aggregate`, args, options);
}

export function useGroupByTodo<
    T extends Prisma.TodoGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.TodoGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.TodoGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.TupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.TodoGroupByArgs, OrderByArg> & InputErrors>,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.TodoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TodoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.TodoGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.TodoGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.TodoGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Todo', `${endpoint}/todo/groupBy`, args, options);
}

export function useCountTodo<T extends Prisma.TodoCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TodoCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TodoCountAggregateOutputType>
            : number
    >('Todo', `${endpoint}/todo/count`, args, options);
}
