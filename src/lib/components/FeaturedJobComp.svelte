<script lang="ts">
	import bookmark from '$lib/icon/BookmarkSimple.png';
	import mapPin from '$lib/icon/grayMapPin.png';
	import orange from '$lib/icon/orange.png';
    export let bg: string = "gradient-to-r from-yellow-50 to-white"
</script>

<div
	class="inline-flex w-full flex-col items-start justify-start gap-5 rounded-lg border border-zinc-200 bg-{bg} p-6 shadow"
>
	<!-- first row -->
	<div class="flex h-14 flex-col items-start justify-start gap-1.5 self-stretch">
		<div class="self-stretch text-lg font-medium leading-7 text-zinc-900">
			<slot name="title">Techical Support Specialist</slot>
		</div>
		<div class="inline-flex items-start justify-start gap-2">
			<div class="flex items-start justify-start gap-2.5 rounded-sm bg-green-100 px-2 py-1 text-nowrap">
				<div class=" text-xs font-semibold uppercase leading-3 text-green-600">
					<slot name="role">FULL TIME</slot>
				</div>
			</div>
			<div class=" text-sm font-normal leading-tight text-gray-500">
				Salary: <slot name="slalry">SLE 5,000 - SLE 6,000</slot>
			</div>
		</div>
	</div>
	<!-- first row ends -->

	<!-- second row -->
	<div class="justify-between inline-flex w-full items-center gap-3">
		<div class="flex gap-3">
			<div class="h-14 w-14">
				<slot name="companylogo"><img alt="company_logo" class="w-14" src={orange} /></slot>
			</div>
			<div class="inline-flex flex-col items-start justify-start gap-1">
				<div class="self-stretch text-base font-medium leading-normal text-zinc-900">
					<slot name="company name">Orange SL</slot>
				</div>

				<div class="inline-flex items-center justify-start gap-1 self-stretch">
					<!-- location logo -->
					<div class="h-4 w-4">
						<img alt="gray_pin_logo" src={mapPin} class="h-4 w-4" />
					</div>
					<!-- logo ends  -->
					<div class="shrink grow basis-0 text-sm font-normal leading-tight text-gray-500">
						25 Main Road, Hill Station
					</div>
				</div>
			</div>
		</div>
		<button class="h-6 w-6">
			<img class="h-6 w-6" alt="bookmarklogo" src={bookmark} />
		</button>
	</div>
	<!-- second row ends -->
</div>
