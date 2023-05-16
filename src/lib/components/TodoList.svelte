<script lang="ts">
    import { invalidateAll } from '$app/navigation';
    import { page } from '$app/stores';
    import type { List, User } from '@prisma/client';
    import { LockClosed, Trash } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { customAlphabet } from 'nanoid';
    import Avatar from './Avatar.svelte';
    import TimeInfo from './TimeInfo.svelte';

    export let value: List & { owner: User };

    let form: HTMLFormElement;

    async function onDelete() {
        if (confirm('Are you sure you want to delete this list?')) {
            const r = await fetch(`/api/list/${value.id}`, {
                method: 'DELETE',
            });
            if (r.status !== 200) {
                const { message } = await r.json();
                alert(message);
            } else {
                await invalidateAll();
            }
        }
    }
</script>

<div class="card w-80 bg-base-100 shadow-xl cursor-pointer hover:bg-gray-50">
    <a href={`${$page.url.pathname}/${value.id}`}>
        <figure>
            <img
                src={`https://picsum.photos/seed/${value.id}/300/200`}
                width="320"
                height="320"
                alt="Cover"
            />
        </figure>
    </a>
    <div class="card-body">
        <a href={`${$page.url.pathname}/${value.id}`}>
            <h2 class="card-title line-clamp-1">
                {value.title || 'Missing Title'}
            </h2>
        </a>
        <div class="card-actions flex w-full justify-between">
            <div>
                <TimeInfo {value} />
            </div>
            <div class="flex space-x-2">
                <Avatar user={value.owner} size={18} />
                {#if value.private}
                    <div class="tooltip" data-tip="Private">
                        <Icon src={LockClosed} class="w-4 h-4 text-gray-500" />
                    </div>
                {/if}
                <form bind:this={form} on:submit|preventDefault={onDelete}>
                    <input type="hidden" name="listId" value={value.id} />
                    <button type="submit" on:click|preventDefault={onDelete}>
                        <Icon
                            src={Trash}
                            class="w-4 h-4 text-gray-500 cursor-pointer"
                        /></button
                    >
                </form>
            </div>
        </div>
    </div>
</div>
