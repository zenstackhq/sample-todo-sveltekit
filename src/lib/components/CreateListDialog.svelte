<script lang="ts">
    import { invalidateAll } from '$app/navigation';
    import type { Space } from '@prisma/client';

    let modalOpen = false;
    let titleRef: HTMLElement;
    let title = '';
    let _private = false;

    export let space: Space;

    $: if (modalOpen) {
        setTimeout(() => titleRef.focus(), 100);
    }

    async function onCreate() {
        const r = await fetch('/api/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                spaceId: space.id,
                title,
                private: _private,
            }),
        });
        if (r.status !== 200) {
            const { message } = await r.json();
            alert(message);
        } else {
            await invalidateAll();
            modalOpen = false;
            title = '';
            _private = false;
        }
    }
</script>

<div class:hidden={!modalOpen}>
    <input
        type="checkbox"
        id="create-list-modal"
        class="modal-toggle"
        bind:checked={modalOpen}
    />
    <div class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-xl mb-8">Create a Todo list</h3>
            <form on:submit|preventDefault={onCreate}>
                <div class="flex flex-col space-y-4">
                    <div class="flex items-center">
                        <label for="title" class="text-lg inline-block w-20">
                            Title
                        </label>
                        <input
                            name="title"
                            type="text"
                            required
                            placeholder="Title of your list"
                            class="input input-bordered w-full max-w-xs mt-2"
                            bind:this={titleRef}
                            bind:value={title}
                        />
                    </div>
                    <div class="flex items-center">
                        <label for="private" class="text-lg inline-block w-20">
                            Private
                        </label>
                        <input
                            name="private"
                            type="checkbox"
                            class="checkbox"
                            bind:checked={_private}
                        />
                    </div>
                </div>
                <div class="modal-action">
                    <input
                        class="btn btn-primary"
                        type="submit"
                        value="Create"
                    />
                    <label for="create-list-modal" class="btn btn-outline">
                        Cancel
                    </label>
                </div>
            </form>
        </div>
    </div>
</div>
