/* eslint-disable */
import type { Prisma, SpaceUser } from '@prisma/client';
import { getContext } from 'svelte';
import { derived } from 'svelte/store';
import type { MutationOptions, QueryOptions } from '@tanstack/svelte-query';
import type { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime';
import { query, postMutation, putMutation, deleteMutation, SvelteQueryContextKey } from './_helper';

export function useCreateSpaceUser(
    options?: Omit<MutationOptions<SpaceUser, unknown, Prisma.SpaceUserCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = postMutation<Prisma.SpaceUserCreateArgs, SpaceUser>(
        'SpaceUser',
        `${endpoint}/spaceUser/create`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                SpaceUser,
                Prisma.SpaceUserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useCreateManySpaceUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = postMutation<Prisma.SpaceUserCreateManyArgs, Prisma.BatchPayload>(
        'SpaceUser',
        `${endpoint}/spaceUser/createMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceUserCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManySpaceUser<T extends Prisma.SpaceUserFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindManyArgs>,
    options?: QueryOptions<Array<Prisma.SpaceUserGetPayload<T>>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Array<Prisma.SpaceUserGetPayload<T>>>('SpaceUser', `${endpoint}/spaceUser/findMany`, args, options);
}

export function useFindUniqueSpaceUser<T extends Prisma.SpaceUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceUserFindUniqueArgs>,
    options?: QueryOptions<Prisma.SpaceUserGetPayload<T>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Prisma.SpaceUserGetPayload<T>>('SpaceUser', `${endpoint}/spaceUser/findUnique`, args, options);
}

export function useFindFirstSpaceUser<T extends Prisma.SpaceUserFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserFindFirstArgs>,
    options?: QueryOptions<Prisma.SpaceUserGetPayload<T>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Prisma.SpaceUserGetPayload<T>>('SpaceUser', `${endpoint}/spaceUser/findFirst`, args, options);
}

export function useUpdateSpaceUser(
    options?: Omit<MutationOptions<SpaceUser, unknown, Prisma.SpaceUserUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = putMutation<Prisma.SpaceUserUpdateArgs, SpaceUser>(
        'SpaceUser',
        `${endpoint}/spaceUser/update`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                SpaceUser,
                Prisma.SpaceUserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useUpdateManySpaceUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = putMutation<Prisma.SpaceUserUpdateManyArgs, Prisma.BatchPayload>(
        'SpaceUser',
        `${endpoint}/spaceUser/updateMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceUserUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertSpaceUser(
    options?: Omit<MutationOptions<SpaceUser, unknown, Prisma.SpaceUserUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = postMutation<Prisma.SpaceUserUpsertArgs, SpaceUser>(
        'SpaceUser',
        `${endpoint}/spaceUser/upsert`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                SpaceUser,
                Prisma.SpaceUserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteSpaceUser(
    options?: Omit<MutationOptions<SpaceUser, unknown, Prisma.SpaceUserDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = deleteMutation<Prisma.SpaceUserDeleteArgs, SpaceUser>(
        'SpaceUser',
        `${endpoint}/spaceUser/delete`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, SpaceUser, Prisma.SpaceUserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUserDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                SpaceUser,
                Prisma.SpaceUserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteManySpaceUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUserDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = deleteMutation<Prisma.SpaceUserDeleteManyArgs, Prisma.BatchPayload>(
        'SpaceUser',
        `${endpoint}/spaceUser/deleteMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.SpaceUserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceUserDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateSpaceUser<T extends Prisma.SpaceUserAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceUserAggregateArgs>,
    options?: QueryOptions<Prisma.GetSpaceUserAggregateType<T>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Prisma.GetSpaceUserAggregateType<T>>('SpaceUser', `${endpoint}/spaceUser/aggregate`, args, options);
}

export function useGroupBySpaceUser<
    T extends Prisma.SpaceUserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SpaceUserGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SpaceUserGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.SpaceUserGroupByArgs, OrderByArg> & InputErrors>,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.SpaceUserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceUserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.SpaceUserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.SpaceUserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.SpaceUserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('SpaceUser', `${endpoint}/spaceUser/groupBy`, args, options);
}

export function useCountSpaceUser<T extends Prisma.SpaceUserCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.SpaceUserCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number
    >,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SpaceUserCountAggregateOutputType>
            : number
    >('SpaceUser', `${endpoint}/spaceUser/count`, args, options);
}
