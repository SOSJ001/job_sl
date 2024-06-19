<script lang="ts">
	import userplus from '$lib/icon/user-plus-duotone.png';
    export let background: string =  ""
	export let compBg: string = "transparent"
</script>

<div class=" inline-flex h-56 w-64 flex-col items-center justify-start gap-6 rounded-xl p-6 bg-{compBg}">
	<div class="inline-flex items-start justify-start gap-2.5 rounded-3xl bg-{background!==""?background:"white"} p-5">
		<slot name="icon">
			<img alt="userplus" src={userplus} class="h-8 w-8" />
		</slot>
	</div>
	<div class="flex flex-col items-start justify-start gap-3">
		<div class="w-64 text-center text-lg font-medium leading-7 text-zinc-900">
        <slot name="title">Create account</slot></div>
		<div class="w-full text-center text-sm font-normal leading-tight text-gray-500">
			<slot name="text">Aliquam facilisis egestas sapien, nec tempor leo tristique at.</slot>
		</div>
	</div>
</div>
