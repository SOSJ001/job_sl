<script lang="ts">
	import TestimonialComp from './TestimonialComp.svelte';
</script>

<div class="inline-flex w-full flex-col items-center justify-start gap-12 bg-gray-100 px-20 py-24">
	<!-- first row -->
	<div class="w-full text-center text-4xl font-medium leading-10 text-gray-800">
		Clients Testimonial
	</div>
	<!-- first row ends -->

	<!-- second row -->
	<div class="w-full overflow-hidden">
		<div
			class="flex w-full flex-row items-start justify-start gap-6 overflow-x-auto overflow-y-hidden pb-5"
		>
			<TestimonialComp />
			<TestimonialComp />
			<TestimonialComp />
			<TestimonialComp />
			<TestimonialComp />
			<TestimonialComp />
		</div>
	</div>
	<!-- second row ends -->
</div>
