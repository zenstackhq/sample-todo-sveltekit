<script lang="ts">
    import { browser } from '$app/environment';
    import { setHooksContext } from '$lib/hooks';
    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
    import '../app.css';

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // disable fetching on the server
                enabled: browser,
            },
        },
    });
    setHooksContext({ endpoint: '/api/model' });
</script>

<div class="h-screen flex flex-col">
    <QueryClientProvider client={queryClient}>
        <slot />
    </QueryClientProvider>
</div>
