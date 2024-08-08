
<script lang="ts">
    import briefcase from "$lib/icon/briefcase-duotone.png"
    export let iconBg: String = ""
	export let width: String = "1/4"
	export let bg:String = "white"
</script>
<div class="w-{width} flex items-center justify-start gap-5 rounded-lg bg-{bg} p-3 shadow-lg">
	<!-- icon below -->
	<div class="flex items-start justify-start gap-2.5 rounded bg-{iconBg!==""?iconBg:"sky-100"} p-3">
		<slot name="icon">
			<img alt="briefcaseicon" src={briefcase} class="h-10 w-10"/>
		</slot>
		
	</div>
	<!-- ends -->

	<div class="inline-flex flex-col items-start justify-start gap-1.5">
		<div class="text-2xl font-medium leading-loose text-zinc-900"><slot name="number">1,423</slot></div>
		<div class="text-base font-normal leading-normal text-gray-500"><slot name="text">Live Jobs</slot></div>
	</div>
</div>
