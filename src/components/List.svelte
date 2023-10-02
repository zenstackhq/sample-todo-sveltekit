<script lang="ts">
    import { useInfiniteFindManyTodo } from '$lib/hooks';

    const PAGE_SIZE = 10;

    const fetchArgs = {
        // include: { author: true },
        orderBy: { createdAt: 'desc' as const },
        take: PAGE_SIZE,
    };

    const posts = useInfiniteFindManyTodo(fetchArgs, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < PAGE_SIZE) {
                return undefined;
            }
            const fetched = pages.flatMap((item) => item).length;
            return {
                ...fetchArgs,
                skip: fetched,
            };
        },
    });
</script>

<div>
    {#if $posts.data}
        {#each $posts.data.pages as page}
            {#each page as post (post.id)}
                <li>{post.title} by {post.author.email}</li>
            {/each}
        {/each}
    {/if}
    {#if $posts.hasNextPage}
        <button on:click={() => $posts.fetchNextPage()}> Load more </button>
    {/if}
</div>
