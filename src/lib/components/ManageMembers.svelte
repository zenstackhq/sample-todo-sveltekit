<script lang="ts">
    import { invalidateAll } from '$app/navigation';
    import {
        SpaceUserRole,
        type Space,
        type SpaceUser,
        type User,
    } from '@prisma/client';
    import { Plus, Trash } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import Avatar from './Avatar.svelte';

    export let user: User;
    export let space: Space;
    export let members: (SpaceUser & { user: User })[];

    let role = SpaceUserRole.USER;
    let email = '';
    let form: HTMLFormElement;

    async function onAddMember() {
        const r = await fetch(`/api/member`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                spaceId: space.id,
                email,
                role,
            }),
        });
        if (r.status !== 200) {
            const { message } = await r.json();
            alert(message);
        } else {
            form.reset();
            await invalidateAll();
        }
    }

    async function onRemoveMember(id: string) {
        const r = await fetch(`/api/member/${id}`, {
            method: 'DELETE',
        });
        if (r.status !== 200) {
            const { message } = await r.json();
            alert(message);
        } else {
            await invalidateAll();
        }
    }
</script>

<div>
    <form
        class="flex flex-wrap gap-2 items-center mb-8 w-full"
        on:submit|preventDefault={onAddMember}
        bind:this={form}
    >
        <input
            type="email"
            bind:value={email}
            required
            placeholder="Type user email and enter to invite"
            class="input input-sm input-bordered flex-grow mr-2"
        />

        <select class="select select-sm mr-2" name="role" bind:value={role}>
            <option value={SpaceUserRole.USER}>USER</option>
            <option value={SpaceUserRole.ADMIN}>ADMIN</option>
        </select>

        <button type="submit">
            <Icon src={Plus} class="w-6 h-6 text-gray-500" />
        </button>
    </form>

    <ul class="space-y-2">
        {#each members as member (member.id)}
            <li class="flex flex-wrap w-full justify-between">
                <div class="flex items-center">
                    <div class="hidden md:block mr-2">
                        <Avatar user={member.user} size={32} />
                    </div>
                    <p class="w-36 md:w-48 line-clamp-1 mr-2">
                        {member.user.name || member.user.email}
                    </p>
                    <p>{member.role}</p>
                </div>
                <div class="flex items-center">
                    {#if user?.id !== member.user.id}
                        <button on:click={() => onRemoveMember(member.id)}
                            ><Icon
                                src={Trash}
                                class="w-4 h-4 text-gray-500"
                            /></button
                        >
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
</div>
