<script lang="ts">
    import NavBar from '$lib/components/NavBar.svelte';
    import { setContext } from 'svelte';
    import type { LayoutData } from './$types';

    $: if (data.user) {
        setContext('currentUser', data.user);
    }

    export let data: LayoutData;
</script>

<div>
    <NavBar />
    <slot />
</div>
