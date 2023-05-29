/* eslint-disable */
import type { Prisma, Space } from '@prisma/client';
import { getContext } from 'svelte';
import { derived } from 'svelte/store';
import type { MutationOptions, QueryOptions } from '@tanstack/svelte-query';
import { SvelteQueryContextKey, type RequestHandlerContext } from './_helper';
import { query, postMutation, putMutation, deleteMutation } from './_helper';

export function useCreateSpace(
    options?: Omit<MutationOptions<Space, unknown, Prisma.SpaceCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = postMutation<Prisma.SpaceCreateArgs, Space>(
        'Space',
        `${endpoint}/space/create`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Space,
                Prisma.SpaceGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useCreateManySpace(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = postMutation<Prisma.SpaceCreateManyArgs, Prisma.BatchPayload>(
        'Space',
        `${endpoint}/space/createMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManySpace<T extends Prisma.SpaceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>,
    options?: QueryOptions<Array<Prisma.SpaceGetPayload<T>>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Array<Prisma.SpaceGetPayload<T>>>('Space', `${endpoint}/space/findMany`, args, options);
}

export function useFindUniqueSpace<T extends Prisma.SpaceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>,
    options?: QueryOptions<Prisma.SpaceGetPayload<T>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Prisma.SpaceGetPayload<T>>('Space', `${endpoint}/space/findUnique`, args, options);
}

export function useFindFirstSpace<T extends Prisma.SpaceFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceFindFirstArgs>,
    options?: QueryOptions<Prisma.SpaceGetPayload<T>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Prisma.SpaceGetPayload<T>>('Space', `${endpoint}/space/findFirst`, args, options);
}

export function useUpdateSpace(
    options?: Omit<MutationOptions<Space, unknown, Prisma.SpaceUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = putMutation<Prisma.SpaceUpdateArgs, Space>(
        'Space',
        `${endpoint}/space/update`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Space,
                Prisma.SpaceGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useUpdateManySpace(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = putMutation<Prisma.SpaceUpdateManyArgs, Prisma.BatchPayload>(
        'Space',
        `${endpoint}/space/updateMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertSpace(
    options?: Omit<MutationOptions<Space, unknown, Prisma.SpaceUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = postMutation<Prisma.SpaceUpsertArgs, Space>(
        'Space',
        `${endpoint}/space/upsert`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Space,
                Prisma.SpaceGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteSpace(
    options?: Omit<MutationOptions<Space, unknown, Prisma.SpaceDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = deleteMutation<Prisma.SpaceDeleteArgs, Space>(
        'Space',
        `${endpoint}/space/delete`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                Space,
                Prisma.SpaceGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteManySpace(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    const _mutation = deleteMutation<Prisma.SpaceDeleteManyArgs, Prisma.BatchPayload>(
        'Space',
        `${endpoint}/space/deleteMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateSpace<T extends Prisma.SpaceAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceAggregateArgs>,
    options?: QueryOptions<Prisma.GetSpaceAggregateType<T>>,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<Prisma.GetSpaceAggregateType<T>>('Space', `${endpoint}/space/aggregate`, args, options);
}

export function useGroupBySpace<
    T extends Prisma.SpaceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors>,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.SpaceGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.SpaceGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('Space', `${endpoint}/space/groupBy`, args, options);
}

export function useCountSpace<T extends Prisma.SpaceCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint } = getContext<RequestHandlerContext>(SvelteQueryContextKey);
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceCountAggregateOutputType>
            : number
    >('Space', `${endpoint}/space/count`, args, options);
}
