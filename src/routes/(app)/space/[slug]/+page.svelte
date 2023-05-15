<script lang="ts">
    import BreadCrumb from '$lib/components/BreadCrumb.svelte';
    import CreateListDialog from '$lib/components/CreateListDialog.svelte';
    import SpaceMembers from '$lib/components/SpaceMembers.svelte';
    import TodoList from '$lib/components/TodoList.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div>
    <div class="px-8 py-2">
        <BreadCrumb space={data.space} />
    </div>
    <div class="p-8">
        <div
            class="w-full flex flex-col md:flex-row mb-8 space-y-4 md:space-y-0 md:space-x-4"
        >
            <label
                for="create-list-modal"
                class="btn btn-primary btn-wide modal-button"
            >
                Create a list
            </label>
            <SpaceMembers space={data.space} members={data.members} />
        </div>

        <ul class="flex flex-wrap gap-6">
            {#each data.lists as list (list.id)}
                <li>
                    <TodoList value={list} />
                </li>
            {/each}
        </ul>
    </div>
    <CreateListDialog space={data.space} />
</div>
