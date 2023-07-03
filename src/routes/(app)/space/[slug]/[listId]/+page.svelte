<script lang="ts">
    import BreadCrumb from '$lib/components/BreadCrumb.svelte';
    import TodoComponent from '$lib/components/Todo.svelte';
    import { Plus } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import type { PageData } from './$types';
    import { enhance } from '$app/forms';

    export let data: PageData;
</script>

<div class="px-8 py-2">
    <BreadCrumb space={data.space} list={data.list} />
</div>
<div class="container w-full flex flex-col items-center pt-12 mx-auto">
    <h1 class="text-2xl font-semibold mb-4">
        {data.list?.title}
    </h1>
    <form method="post" action="?/create" class="flex space-x-2" use:enhance>
        <!-- svelte-ignore a11y-autofocus -->
        <input
            type="text"
            name="title"
            placeholder="Type a title and press enter"
            class="input input-bordered w-72 max-w-xs mt-2"
            autofocus
            required
        />
        <button type="submit">
            <Icon src={Plus} class="w-6 h-6 text-gray-500" />
        </button>
    </form>
    <ul class="flex flex-col space-y-4 py-8 w-11/12 md:w-auto">
        {#each data.todos as todo (todo.id)}
            <TodoComponent value={todo} />
        {/each}
    </ul>
</div>
