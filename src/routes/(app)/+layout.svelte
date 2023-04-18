<script lang="ts">
    import NavBar from '$lib/components/NavBar.svelte';
    import type { LayoutData } from './$types';

    export let data: LayoutData;
</script>

<div>
    <NavBar user={data.user} />
    <slot />
</div>
