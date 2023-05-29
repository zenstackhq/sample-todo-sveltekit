/**
 * The default query endpoint.
 */
export const DEFAULT_QUERY_ENDPOINT = '/api/model';

/**
 * Prefix for react-query keys.
 */
export const QUERY_KEY_PREFIX = 'zenstack:';

/**
 * Context type for configuring the hooks.
 */
export type RequestHandlerContext = {
    endpoint: string;
};

async function fetcher<R>(url: string, options?: RequestInit) {
    const res = await fetch(url, options);
    if (!res.ok) {
        const error: Error & { info?: unknown; status?: number } = new Error(
            'An error occurred while fetching the data.',
        );
        error.info = unmarshal(await res.text());
        error.status = res.status;
        throw error;
    }

    const textResult = await res.text();
    try {
        return unmarshal(textResult) as R;
    } catch (err) {
        console.error(`Unable to deserialize data:`, textResult);
        throw err;
    }
}

/* eslint-disable */

import {
    createMutation,
    createQuery,
    useQueryClient,
    type MutateFunction,
    type MutationOptions,
    type QueryClient,
    type QueryOptions,
} from '@tanstack/svelte-query';

/**
 * Key for setting and getting the global query context.
 */
export const SvelteQueryContextKey = 'zenstack-svelte-query-context';

/**
 * Creates a svelte-query query.
 *
 * @param model The name of the model under query.
 * @param url The request URL.
 * @param args The request args object, URL-encoded and appended as "?q=" parameter
 * @param options The svelte-query options object
 * @returns useQuery hook
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function query<R>(model: string, url: string, args?: unknown, options?: QueryOptions<R>) {
    const reqUrl = makeUrl(url, args);
    return createQuery<R>({
        queryKey: [QUERY_KEY_PREFIX + model, url, args],
        queryFn: () => fetcher<R>(reqUrl),
        ...options,
    });
}

/**
 * Creates a POST mutation with svelte-query.
 *
 * @param model The name of the model under mutation.
 * @param url The request URL.
 * @param options The svelte-query options.
 * @param invalidateQueries Whether to invalidate queries after mutation.
 * @returns useMutation hooks
 */
export function postMutation<T, R = any>(
    model: string,
    url: string,
    options?: Omit<MutationOptions<R, unknown, T>, 'mutationFn'>,
    invalidateQueries = true,
) {
    const queryClient = useQueryClient();
    const mutationFn = (data: any) =>
        fetcher<R>(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: marshal(data),
        });

    const finalOptions = mergeOptions<T, R>(model, options, invalidateQueries, mutationFn, queryClient);
    const mutation = createMutation<R, unknown, T>(finalOptions);
    return mutation;
}

/**
 * Creates a PUT mutation with svelte-query.
 *
 * @param model The name of the model under mutation.
 * @param url The request URL.
 * @param options The svelte-query options.
 * @param invalidateQueries Whether to invalidate queries after mutation.
 * @returns useMutation hooks
 */
export function putMutation<T, R = any>(
    model: string,
    url: string,
    options?: Omit<MutationOptions<R, unknown, T>, 'mutationFn'>,
    invalidateQueries = true,
) {
    const queryClient = useQueryClient();
    const mutationFn = (data: any) =>
        fetcher<R>(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: marshal(data),
        });

    const finalOptions = mergeOptions<T, R>(model, options, invalidateQueries, mutationFn, queryClient);
    const mutation = createMutation<R, unknown, T>(finalOptions);
    return mutation;
}

/**
 * Creates a DELETE mutation with svelte-query.
 *
 * @param model The name of the model under mutation.
 * @param url The request URL.
 * @param options The svelte-query options.
 * @param invalidateQueries Whether to invalidate queries after mutation.
 * @returns useMutation hooks
 */
export function deleteMutation<T, R = any>(
    model: string,
    url: string,
    options?: Omit<MutationOptions<R, unknown, T>, 'mutationFn'>,
    invalidateQueries = true,
) {
    const queryClient = useQueryClient();
    const mutationFn = (data: any) =>
        fetcher<R>(makeUrl(url, data), {
            method: 'DELETE',
        });

    const finalOptions = mergeOptions<T, R>(model, options, invalidateQueries, mutationFn, queryClient);
    const mutation = createMutation<R, unknown, T>(finalOptions);
    return mutation;
}

function mergeOptions<T, R = any>(
    model: string,
    options: Omit<MutationOptions<R, unknown, T, unknown>, 'mutationFn'> | undefined,
    invalidateQueries: boolean,
    mutationFn: MutateFunction<R, unknown, T>,
    queryClient: QueryClient,
): MutationOptions<R, unknown, T, unknown> {
    const result = { ...options, mutationFn };
    if (options?.onSuccess || invalidateQueries) {
        result.onSuccess = (...args) => {
            if (invalidateQueries) {
                queryClient.invalidateQueries([QUERY_KEY_PREFIX + model]);
            }
            return options?.onSuccess?.(...args);
        };
    }
    return result;
}

function marshal(value: unknown) {
    return JSON.stringify(value);
}

function unmarshal(value: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return JSON.parse(value) as any;
}

function makeUrl(url: string, args: unknown) {
    return args ? url + `?q=${encodeURIComponent(JSON.stringify(args))}` : url;
}