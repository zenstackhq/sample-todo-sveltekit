<script lang="ts">
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';

    let name = '';
    let slug = '';
</script>

<div class="flex items-center justify-center h-full">
    <form method="post" use:enhance>
        <h1 class="text-3xl mb-8">Create a space</h1>
        <div class="flex-col space-y-4">
            <div>
                <label for="name" class="text-lg"> Space name </label>
                <input
                    name="name"
                    type="text"
                    required
                    placeholder="Name of your space"
                    class="input input-bordered w-full max-w-xs mt-2"
                    bind:value={name}
                    autoFocus
                />
            </div>
            <div>
                <label for="slug" class="text-lg"> Space slug </label>
                <input
                    name="slug"
                    type="text"
                    required
                    placeholder="Slug of your space"
                    class="input input-bordered w-full max-w-xs mt-2"
                    bind:value={slug}
                />
            </div>
        </div>

        <div class="flex space-x-4 mt-6">
            <input
                type="submit"
                disabled={name.length < 4 ||
                    name.length > 20 ||
                    !slug.match(/^[0-9a-zA-Z]{4,16}$/)}
                value="Create"
                class="btn btn-primary px-8"
            />
            <button class="btn btn-outline" on:click={() => goto('/')}>
                Cancel
            </button>
        </div>
    </form>
</div>
