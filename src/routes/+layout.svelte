<script lang="ts">
    import { SvelteQueryContextKey } from '$lib/hooks';
    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
    import { setContext } from 'svelte';
    import '../app.css';

    const queryClient = new QueryClient();
    setContext(SvelteQueryContextKey, { endpoint: '/api/model' });
</script>

<div class="h-screen flex flex-col">
    <QueryClientProvider client={queryClient}>
        <slot />
    </QueryClientProvider>
</div>
