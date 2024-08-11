<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import orange from '$lib/icon/orange.png';
</script>

<div class="w-full space-y-3">
	<div class=" flex justify-start font-semibold">
		<span>Favourite Jobs <span class="text-gray-400">(17)</span></span>
	</div>

    <!-- jobs below -->
	<div class=" flex flex-row justify-between shadow-lg p-2">
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
					<span>Sierra Leone</span>
					<span>$50k-80k/month</span>
				</div>
			</div>
		</div>
		<div>
			<ActionButton width="[200px]" buttonBg="gray-100" textColor="gray-400">
				<span slot="text">Deadline Expired</span>
			</ActionButton>
		</div>
	</div>

    <div class=" flex flex-row justify-between shadow-lg p-2">
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
					<span>Sierra Leone</span>
					<span>$50k-80k/month</span>
				</div>
			</div>
		</div>
		<div>
			<ActionButton hoverColor="blue-200" width="[200px]" buttonBg="blue-100" textColor="blue-700">
				<span class="font-bold" slot="text">Apply Now</span>
			</ActionButton>
		</div>
	</div>
</div>
