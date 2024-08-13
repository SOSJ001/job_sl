<script lang="ts">
	import ActionButton from '$lib/components/ActionButton.svelte';
	import orange from '$lib/icon/orange.png';
	import { Spinner } from 'flowbite-svelte';
	export let data;
	let button
	data.appliedJobTableResult.then((data) => {
		console.log('data', data);
	});
	let rows = data.appliedJobTableResult;
</script>

<div class="w-full space-y-3 overflow-y-auto">
	<div class=" flex justify-start font-semibold">
		<span>Applied Jobs <span class="text-gray-400">(589)</span></span>
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
   {#await rows}
		<Spinner color="blue" size={8} />
	{:then row}
		{#if row !== null}
			{#each row as rowdata}
				<div
					class="grid grid-cols-2 items-center justify-between gap-5 p-2 text-center font-mono shadow"
				>
					<div class="flex flex-row gap-2">
						<div>
							<div class="h-14 w-14">
								<slot name="companylogo"><img alt="company_logo" class="w-14" src={orange} /></slot>
							</div>
						</div>
						<div class="grid-col-2 flex h-full w-full flex-col items-center justify-center gap-3">
							<div class="text-md flex w-full items-center justify-between">
								<span>{rowdata.jobTitle}</span>
								<span class="text-nowrap rounded-sm bg-green-100 px-2 py-1">
									<div class="text-xs font-semibold uppercase leading-3 text-green-600">
										<slot name="role">{rowdata.remote === null ? '' : rowdata.remote}</slot>
									</div>
								</span>
							</div>
							<div class="flex w-full flex-row justify-between text-gray-500">
								<span>{rowdata.country}</span>
								<span>${rowdata.minSalary}-{rowdata.maxSalary}k/month</span>
							</div>
						</div>
					</div>
					<div class="grid grid-cols-3 items-center justify-center text-sm">
						<div>{rowdata.created_at}</div>
						<div class="text-green-700">Active</div>
						<button>
							<ActionButton textColor="blue-700" hoverColor="gray-200" buttonBg="gray-100">
								<span slot="text">Applied</span>
							</ActionButton>
						</button>
					</div>
				</div>
			{/each}
		{/if}
	{/await}
    
    
	<!-- Table Body ends -->
</div>
