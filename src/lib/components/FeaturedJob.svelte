<script>
	import ActionButton from './ActionButton.svelte';
	import fiarrow from '$lib/icon/fi_arrow-right.png';
	import FeaturedJobComp from './FeaturedJobComp.svelte';
	import africell from '$lib/icon/AfricellLogo.png';
</script>

<div
	class="inline-flex w-full flex-col items-center justify-center gap-12 bg-white px-20 py-24 shadow"
>
	<!-- first row -->
	<div class="inline-flex w-full items-center justify-between">
		<div class="text-center text-4xl font-medium leading-10 text-gray-800">Featured job</div>
		<div class="flex items-center justify-center gap-3 rounded-sm">
			<ActionButton textColor="blue-700" buttonborder="sky-100" hoverColor="blue-100">
				<span class="flex gap-1" slot="text"
					><span> View All</span><img src={fiarrow} alt="arrow" /> <span></span></span
				>
			</ActionButton>
			<div class="relative h-6 w-6"></div>
		</div>
	</div>
	<!-- first row ends -->

	<!-- second row -->
	<div class="grid w-full grid-cols-3 items-start justify-start gap-4">
		<FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
		<FeaturedJobComp />
		<FeaturedJobComp />
        <FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
        <FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
        <FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
        <FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
	</div>
	<!-- second row ends -->
</div>
