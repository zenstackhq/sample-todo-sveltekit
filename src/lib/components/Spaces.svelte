<script lang="ts">
    import type { Space } from '@prisma/client';
    export let spaces: Space[];
</script>

<ul class="flex flex-wrap gap-4">
    {#each spaces as space (space.id)}
        <li
            class="card w-80 h-32 shadow-xl text-gray-600 cursor-pointer hover:bg-gray-50 border"
        >
            <a href={`/space/${space.slug}`}>
                <div class="card-body" title={space.name}>
                    <h2 class="card-title line-clamp-1">
                        {space.name}
                    </h2>
                </div>
            </a>
        </li>
    {/each}
</ul>
