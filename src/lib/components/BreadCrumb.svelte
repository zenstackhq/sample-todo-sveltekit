<script lang="ts">
    import { page } from '$app/stores';
    import type { List, Space } from '@prisma/client';

    export let list: List | undefined = undefined;
    export let space: Space;

    const items: Array<{ text: string; link: string }> = [];

    const parts = $page.url.pathname.split('/').filter((p) => p);
    const [base] = parts;
    if (base === 'space') {
        items.push({ text: 'Home', link: '/' });
        items.push({ text: space.name || '', link: `/space/${space.slug}` });

        if (list) {
            items.push({
                text: list?.title || '',
                link: `/space/${space.slug}/${list.id}`,
            });
        }
    }
</script>

<div class="text-sm text-gray-600 breadcrumbs">
    <ul>
        {#if items.length > 0}
            {#each items as item (item.link)}
                <li>
                    <a href={item.link}>
                        {item.text}
                    </a>
                </li>
            {/each}
        {/if}
    </ul>
</div>
