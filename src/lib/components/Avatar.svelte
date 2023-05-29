<script lang="ts">
    import type { User } from '@prisma/client';
    import { getContext } from 'svelte';
    const user = getContext<User>('currentUser');
    export let size: number = 32;
</script>

<div class="tooltip" data-tip={user.name || user.email}>
    <img
        src={`https://picsum.photos/seed/${user.email}/200/300`}
        alt="avatar"
        class="rounded-full"
        style="width: {size}px; height: {size}px;"
    />
</div>
