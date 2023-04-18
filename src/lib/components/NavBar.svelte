<script lang="ts">
    import type { Space, User } from '@prisma/client';
    import Avatar from './Avatar.svelte';

    export let user: User;
    export let space: Space | undefined = undefined;
</script>

<div class="navbar bg-base-100 px-8 py-2 border-b">
    <div class="flex-1">
        <a class="flex items-center" href="/">
            <img src="/logo.png" alt="Logo" width="32" height="32" />
            <div
                class="text-xl font-semibold ml-2 text-slate-700 hidden md:inline-block"
            >
                {space?.name || 'Welcome Todo App'}
            </div>
            <p class="text-xs ml-2 text-gray-500 self-end">
                Powered by ZenStack
            </p>
        </a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabIndex={0} class="btn btn-ghost btn-circle avatar">
                <Avatar {user} />
            </label>
            <ul
                tabIndex={0}
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li class="border-b border-gray-200">
                    {#if user}<div>{user.name || user.email}</div>{/if}
                </li>
                <li>
                    <form method="POST" action="/api/auth/signout">
                        <input type="submit" value="Logout" />
                    </form>
                </li>
            </ul>
        </div>
    </div>
</div>
