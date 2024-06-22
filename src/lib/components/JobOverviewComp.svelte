<script lang="ts">
</script>

<div class="space-y-2">
	<div class="inline-flex flex-col items-center justify-start">
		<div class="h-8 w-8">
			<slot name="icon">
				<div class="h-8 w-8"></div>
			</slot>
		</div>
	</div>
	<div class="flex h-10 flex-col items-start justify-start gap-1 self-stretch gap-y-2">
		<div class="self-stretch text-xs font-normal uppercase leading-none text-gray-500">
			Job Posted:
		</div>
		<div class="self-stretch text-sm font-medium leading-tight text-zinc-900">14 May, 2024</div>
	</div>
</div>
