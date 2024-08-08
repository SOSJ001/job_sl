<script lang="ts">
	import Features from '$lib/components/Features.svelte';

</script>
<div class="space-y-3 w-full">
    <div class="font-bold text-xl">Hello, Michael S.O.S</div>
    <div class="text-sm text-gray-500 capitalize">here is your daily activities and job alerts</div>
    <div class="flex flex-row justify-between px-10 w-full ">
        <Features width="[260px]" bg="gray-100">
            <span slot="text">Applied Jobs</span>
        </Features>
        <Features width="[260px]" bg="gray-100">
            <span slot="text">Favourite Jobs</span>
        </Features>
        <Features width="[500px]" bg="gray-100">
            <span slot="text">Job Alerts</span>
        </Features>
    </div>
</div>