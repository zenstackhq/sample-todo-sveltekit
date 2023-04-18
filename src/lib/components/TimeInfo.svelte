<script lang="ts">
    import moment from 'moment';

    export let value: {
        createdAt: Date;
        updatedAt: Date;
        completedAt?: Date | null;
    };
</script>

<p class="text-sm text-gray-500">
    {value.completedAt
        ? `Completed ${moment(value.completedAt).fromNow()}`
        : value.createdAt === value.updatedAt
        ? `Created ${moment(value.createdAt).fromNow()}`
        : `Updated ${moment(value.updatedAt).fromNow()}`}
</p>
