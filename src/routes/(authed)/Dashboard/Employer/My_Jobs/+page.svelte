<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { Spinner } from 'flowbite-svelte';
	import { Button, Modal } from 'flowbite-svelte';
	let defaultModal = false;
	export let data;
	let jobId: Int8Array;
	data.jobAndApplicantsResults.then((data) => {
		console.log('data', data);
	});
	let rows = data.jobTableResult;
	let jobAndApplicantsRow = data.jobAndApplicantsResults;
	let applicants: number = 0;
	let applied_id: Int8Array
</script>

<div class="w-full space-y-3 overflow-y-auto">
	<div class=" flex justify-start font-semibold">
		<span>My Jobs <span class="text-gray-400">(589)</span></span>
	</div>
	<!-- table data below in a grid format -->
	<div class="grid grid-cols-2 bg-gray-100 p-5 text-center font-mono font-semibold">
		<!-- table header  -->
		<div class="">Jobs</div>
		<div class="grid grid-cols-3">
			<div>Applications</div>
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
					<div class="gap- flex flex-row">
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
					<div class="grid grid-cols-3 items-center justify-center text-sm text-gray-500">
						<div>{applicants} Applications</div>
						<div class="text-green-700">Active</div>
						<button
							on:click={() => {
								jobId = rowdata.id;
								defaultModal = true;
							}}
						>
							<ActionButton textColor="blue-700" hoverColor="gray-200" buttonBg="gray-100">
								<span slot="text">View <br /> Applications</span>
							</ActionButton>
						</button>
					</div>
				</div>
			{/each}
		{/if}
	{/await}

	<!-- Table Body ends -->
</div>

<!-- Modal below -->
<Modal
	outsideclose
	color="blue"
	size="lg"
	title="Application Details"
	bind:open={defaultModal}
	autoclose
>
	<div class="grid grid-cols-3 bg-gray-100 p-5 text-center font-mono font-semibold text-gray-700">
		<!-- table header  -->
		<div class="">Applicants Name</div>
		<div>Email</div>
		<div>Action</div>
	</div>
	<!-- table body  job_id-->
	{#await jobAndApplicantsRow}
		<Spinner color="blue" size={8} />
	{:then row}
		{#if row !== null}
			{#each row as rowdata}
				{#if rowdata.job_id === jobId}
					<div
						class="grid grid-cols-3 items-center justify-center gap-5 p-2 text-center font-mono text-gray-600 shadow"
					>
						<div class="gap- flex flex-row">
							<div>
								{rowdata.raw_user_meta_data.first_name +
									' ' +
									rowdata.raw_user_meta_data.first_name}
							</div>
						</div>
						<!--  -->

						<div>{rowdata.raw_user_meta_data.email}</div>
						<div class="flex w-full gap-2">
							<button
								on:click={() => {
									alert(' Candidate Accepted');
								}}
							>
								<ActionButton textColor="blue-700" hoverColor="gray-200" buttonBg="gray-100">
									<span slot="text">Accept</span>
								</ActionButton>
							</button>
							<ActionButton textColor="blue-700" hoverColor="gray-200" buttonBg="gray-100">
								<span slot="text">Download C.V</span>
							</ActionButton>
						</div>
					</div>
				{/if}
			{/each}
		{/if}
	{/await}
</Modal>
