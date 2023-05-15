<script lang="ts">
    import type { Space, SpaceUser, User } from '@prisma/client';
    import { Plus } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import Avatar from './Avatar.svelte';
    import ManageMembers from './ManageMembers.svelte';

    export let space: Space;
    export let members: (SpaceUser & { user: User })[];
</script>

<div class="flex items-center">
    <label for="management-modal" class="modal-button">
        <Icon src={Plus} class="w-6 h-6 text-gray-500 cursor-pointer mr-1" />
    </label>

    <div class="flex items-center">
        <label class="mr-1 modal-button cursor-pointer" for="management-modal">
            {#each members as member (member.id)}
                <Avatar size={32} />
            {/each}
        </label>
    </div>

    <!-- Member management dialog -->
    <input type="checkbox" id="management-modal" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-base md:text-lg">
                Manage Members of {space.name}
            </h3>

            <div class="p-4 mt-4">
                <ManageMembers {space} {members} />
            </div>

            <div class="modal-action">
                <label for="management-modal" class="btn btn-outline">
                    Close
                </label>
            </div>
        </div>
    </div>
</div>
