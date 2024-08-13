<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import Pp from '$lib/icon/profilePicture.png';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import orange from '$lib/icon/orange.png';
	import { Spinner } from 'flowbite-svelte';
	import { insertIntoAppliedJobs } from '$lib/supabase/store.js';
	let job_id: number;
	let insertAppliedJob = async () => {
		console.log('here');
		let insertError = await insertIntoAppliedJobs(job_id);
		if (insertError === null) {
			alert("Job Successfuly Inserted, Navigate to 'My Jobs' to see jobs");
		} else {
			console.log('error inputing data');
		}
	};
	export let data;
	data.relatedJobTableResult.then((data) => {
		console.log('data', data);
	});
	let rows = data.relatedJobTableResult;

	// put the job id in the button pass as param to the insert into applied job tables
</script>

<div class="w-full space-y-3">
	<div class="text-xl font-bold">Hello, Michael S.O.S</div>
	<div class="text-sm capitalize text-gray-500">here is your daily activities and job alerts</div>
	<div class="flex w-full flex-row justify-between px-11">
		<Features width="[200px]" bg="gray-100">
			<span slot="text">Applied Jobs</span>
		</Features>
		<Features width="[250px]" bg="gray-100">
			<span slot="text">Favourite Jobs</span>
		</Features>
		<Features width="[200px]" bg="gray-100">
			<span slot="text">Job Alerts</span>
		</Features>
	</div>
	<div class="flex w-full flex-row items-center justify-between gap-5 rounded bg-red-500 px-4 py-3">
		<div class="flex flex-row gap-5">
			<div>
				<img src={Pp} alt="profile_pictue" class="h-20 w-20" />
			</div>
			<div class="flex flex-col justify-center text-sm text-gray-100">
				<div>Your profile editing is not completed</div>
				<div>Complete your profile editing & build your custom Resume</div>
			</div>
		</div>
		<div>
			<ActionButton hoverColor="gray-100" textColor="red-500" buttonBg="white" width="[200px]">
				<span slot="text"> Edit Profile </span>
			</ActionButton>
		</div>
	</div>
	<div class=" flex justify-between font-semibold">
		<span>Related Jobs</span>
		<button class="text-gray-600">View All</button>
	</div>
	<!-- table data below in a grid format -->
	<div class="grid grid-cols-2 bg-gray-100 p-5 text-center font-mono font-semibold">
		<!-- table header  -->
		<div class="">Job</div>
		<div class="grid grid-cols-3">
			<div>Date Posted</div>
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
						<button
							on:click={async () => {
								// insertAppliedJob;
								let insertError = await insertIntoAppliedJobs(rowdata.id);
								if (insertError === null) {
									alert("Application Successful, Navigate to 'Applied Jobs' jobs");
								} else {
									console.log("this is the error", insertError);
								}
							}}
						>
							<ActionButton textColor="blue-700" hoverColor="gray-200" buttonBg="gray-100">
								<span slot="text">Apply Now</span>
							</ActionButton>
						</button>
					</div>
				</div>
			{/each}
		{/if}
	{/await}
	<!-- Table Body ends -->
</div>
