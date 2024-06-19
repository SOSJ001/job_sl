<script lang="ts">
    import pen from "$lib/icon/pen-nib-duotone.png"
    export let iconBg: string = "sky-100"

</script>
<div class="inline-flex h-28 w-64 items-center justify-start gap-4 rounded-xl p-3">
	<div class="flex items-center justify-center rounded-lg bg-{iconBg} p-2">
		<slot name="icon"><img alt="pen_logo" src={pen} class="h-8 w-8"></slot>
	</div>
	<div class="inline-flex flex-col items-start justify-start gap-2">
		<div class="text-lg font-medium leading-7 text-zinc-900">
			<slot name="title">Graphics & Design</slot>
		</div>
		<div class="text-sm font-normal leading-tight text-gray-500">
			<slot name="description">357 Open position</slot>
		</div>
	</div>
</div>
