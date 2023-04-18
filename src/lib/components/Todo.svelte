<script lang="ts">
    import type { Todo, User } from '@prisma/client';
    import { Trash } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import Avatar from './Avatar.svelte';
    import TimeInfo from './TimeInfo.svelte';

    let completeForm: HTMLFormElement;
    let deleteForm: HTMLFormElement;

    export let value: Todo & { owner: User };
</script>

<div
    class="border rounded-lg px-8 py-4 shadow-lg flex flex-col items-center w-full lg:w-[480px]"
>
    <div class="flex justify-between w-full mb-4">
        <h3
            class={`text-xl line-clamp-1 ${
                value.completedAt
                    ? 'line-through text-gray-400 italic'
                    : 'text-gray-700'
            }`}
        >
            {value.title}
        </h3>
        <div class="flex">
            <form
                method="post"
                action="?/complete"
                class="flex"
                bind:this={completeForm}
            >
                <input type="hidden" name="todoId" value={value.id} />
                <input
                    type="checkbox"
                    name="completed"
                    class="checkbox mr-2"
                    checked={!!value.completedAt}
                    on:change={() => completeForm.submit()}
                />
            </form>
            <form
                method="post"
                action="?/delete"
                class="flex"
                bind:this={deleteForm}
            >
                <input type="hidden" name="todoId" value={value.id} />
                <button type="submit">
                    <Icon
                        src={Trash}
                        class="w-6 h-6 text-gray-500 cursor-pointer"
                    />
                </button>
            </form>
        </div>
    </div>
    <div class="flex justify-end w-full space-x-2">
        <TimeInfo {value} />
        <Avatar user={value.owner} size={18} />
    </div>
</div>
