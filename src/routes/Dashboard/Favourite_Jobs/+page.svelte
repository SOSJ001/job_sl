<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import orange from '$lib/icon/orange.png';
</script>

<div class="w-full space-y-3">
	<div class=" flex justify-start font-semibold">
		<span>Favourite Jobs <span class="text-gray-400">(589)</span></span>
	</div>
	<!-- table data below in a grid format -->
	<div class="grid grid-cols-2 bg-gray-100 p-5 text-center font-mono font-semibold">
		<!-- table header  -->
		<div class="">Job</div>
		<div class="grid grid-cols-3">
			<div>Date Applied</div>
			<div>Status</div>
			<div>Action</div>
		</div>
	</div>
	<!-- table body  -->
	<div class="grid grid-cols-2 items-center justify-between text-center font-mono">
		<div class="flex flex-row gap-2">
			<div>
				<div class="h-14 w-14">
					<slot name="companylogo"><img alt="company_logo" class="w-14" src={orange} /></slot>
				</div>
			</div>
			<div class="grid-col-2 flex h-full flex-col items-center justify-center gap-3">
				<div class="text-md flex items-center justify-center">
					<span>Techical Support Specialist</span>
					<span class="text-nowrap rounded-sm bg-green-100 px-2 py-1">
						<div class="text-xs font-semibold uppercase leading-3 text-green-600">
							<slot name="role">Remote</slot>
						</div>
					</span>
				</div>
				<div class="flex w-full flex-row justify-between text-gray-500">
					<span>Brazil</span>
					<span>$50k-80k/month</span>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-3 items-center justify-center text-sm">
			<div>Feb 8, 2019 19:28</div>
			<div class="text-green-700">Active</div>
			<div>
				<ActionButton textColor="blue-700" hoverColor="gray-200" buttonBg="gray-100">
					<span slot="text">View Details</span>
				</ActionButton>
			</div>
		</div>
	</div>
	<!-- Table Body ends -->
</div>
