<script lang="ts">
    import { browser } from '$app/environment';
    import { SvelteQueryContextKey } from '$lib/hooks';
    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
    import { setContext } from 'svelte';
    import '../app.css';

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // disable fetching on the server
                enabled: browser,
            },
        },
    });
    setContext(SvelteQueryContextKey, { endpoint: '/api/model' });
</script>

<div class="h-screen flex flex-col">
    <QueryClientProvider client={queryClient}>
        <slot />
    </QueryClientProvider>
</div>
