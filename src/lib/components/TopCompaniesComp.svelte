<script lang="ts">
	import africell from '$lib/icon/AfricellLogo.png';
	import location from '$lib/icon/grayMapPin.png';
</script>

<div
	class="inline-flex h-44 w-96 flex-col items-start justify-start gap-5 rounded-lg border border-zinc-200 bg-white p-6 shadow"
>
	<div class="inline-flex items-start justify-start gap-4 self-stretch">
		<!-- logo  -->
		<div class=" h-14">
			<slot name="logo"><img alt="logo" class=" h-14" src={africell} /></slot>
		</div>
		<!-- logo ends  -->
		<div class="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-1.5">
			<div class="inline-flex items-center justify-start gap-2">
				<div class="text-lg font-medium leading-7 text-gray-800">
					<slot name="name">Orange SL</slot>
				</div>
				<div class="flex items-start justify-start gap-2.5 rounded-3xl bg-rose-50 px-3 py-0.5">
					<div class="text-sm font-normal leading-tight text-red-500">Featured</div>
				</div>
			</div>
			<div class="inline-flex items-center justify-start gap-1 self-stretch">
				<div class="h-4 w-4">
					<img alt="map pin" src={location} class=" h-4 w-4" />
				</div>
				<div class="shrink grow basis-0 text-sm font-normal leading-tight text-gray-500">
					<slot name="location">25 Main Road, Hill Station</slot>
				</div>
			</div>
		</div>
	</div>
	<div
		class="inline-flex items-center justify-center gap-3 self-stretch rounded-sm bg-sky-100 px-6 py-3"
	>
		<div class="text-base font-semibold capitalize leading-normal text-blue-700">
			Open Position <slot name="amount">(4)</slot>
		</div>
	</div>
</div>
