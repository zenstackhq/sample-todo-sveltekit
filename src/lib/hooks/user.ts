/* eslint-disable */
import type { Prisma, User } from '@prisma/client';
import { getContext } from 'svelte';
import { derived } from 'svelte/store';
import type { MutationOptions, QueryOptions } from '@tanstack/svelte-query';
import type { RequestHandlerContext } from '@zenstackhq/tanstack-query/runtime';
import { query, postMutation, putMutation, deleteMutation, SvelteQueryContextKey } from './_helper';

export function useCreateUser(
    options?: Omit<MutationOptions<User, unknown, Prisma.UserCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = postMutation<Prisma.UserCreateArgs, User>(
        'User',
        `${endpoint}/user/create`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.UserCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.UserCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                User,
                Prisma.UserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useCreateManyUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.UserCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = postMutation<Prisma.UserCreateManyArgs, Prisma.BatchPayload>(
        'User',
        `${endpoint}/user/createMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.UserCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserCreateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.UserCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useFindManyUser<T extends Prisma.UserFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
    options?: QueryOptions<Array<Prisma.UserGetPayload<T>>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Array<Prisma.UserGetPayload<T>>>('User', `${endpoint}/user/findMany`, args, options);
}

export function useFindUniqueUser<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
    options?: QueryOptions<Prisma.UserGetPayload<T>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Prisma.UserGetPayload<T>>('User', `${endpoint}/user/findUnique`, args, options);
}

export function useFindFirstUser<T extends Prisma.UserFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
    options?: QueryOptions<Prisma.UserGetPayload<T>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Prisma.UserGetPayload<T>>('User', `${endpoint}/user/findFirst`, args, options);
}

export function useUpdateUser(
    options?: Omit<MutationOptions<User, unknown, Prisma.UserUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = putMutation<Prisma.UserUpdateArgs, User>(
        'User',
        `${endpoint}/user/update`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.UserUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                User,
                Prisma.UserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useUpdateManyUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.UserUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = putMutation<Prisma.UserUpdateManyArgs, Prisma.BatchPayload>(
        'User',
        `${endpoint}/user/updateMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.UserUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useUpsertUser(
    options?: Omit<MutationOptions<User, unknown, Prisma.UserUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = postMutation<Prisma.UserUpsertArgs, User>(
        'User',
        `${endpoint}/user/upsert`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.UserUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserUpsertArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.UserUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                User,
                Prisma.UserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteUser(
    options?: Omit<MutationOptions<User, unknown, Prisma.UserDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = deleteMutation<Prisma.UserDeleteArgs, User>(
        'User',
        `${endpoint}/user/delete`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.UserDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>,
            options?: Omit<
                MutationOptions<
                    Prisma.CheckSelect<T, User, Prisma.UserGetPayload<T>>,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.CheckSelect<
                T,
                User,
                Prisma.UserGetPayload<T>
            >;
        },
    }));
    return mutation;
}

export function useDeleteManyUser(
    options?: Omit<MutationOptions<Prisma.BatchPayload, unknown, Prisma.UserDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    const _mutation = deleteMutation<Prisma.UserDeleteManyArgs, Prisma.BatchPayload>(
        'User',
        `${endpoint}/user/deleteMany`,
        options,
        invalidateQueries,
    );
    const mutation = derived(_mutation, (value) => ({
        ...value,
        async mutateAsync<T extends Prisma.UserDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>,
            options?: Omit<
                MutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await value.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    }));
    return mutation;
}

export function useAggregateUser<T extends Prisma.UserAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserAggregateArgs>,
    options?: QueryOptions<Prisma.GetUserAggregateType<T>>,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<Prisma.GetUserAggregateType<T>>('User', `${endpoint}/user/aggregate`, args, options);
}

export function useGroupByUser<
    T extends Prisma.UserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.UserGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.UserGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors>,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.UserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.UserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.UserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.UserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >('User', `${endpoint}/user/groupBy`, args, options);
}

export function useCountUser<T extends Prisma.UserCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.UserCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType>
            : number
    >,
) {
    const endpoint = getContext<RequestHandlerContext>(SvelteQueryContextKey).endpoint;
    return query<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType>
            : number
    >('User', `${endpoint}/user/count`, args, options);
}
