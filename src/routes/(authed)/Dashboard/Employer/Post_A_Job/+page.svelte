<script lang="ts">
	import ActionButton from '$lib/components/ActionButton.svelte';
	let jobTitle;
	let jobTags;
	let jobRole;
	let minimumSalary;
	let maximumSalary;
	let education;
	let experience;
	let jobType;
	let country;
	let city;
	let jobBenefit;
	let jobDescription;
</script>

<div class="space-y-3">
	<div class="text-lg font-bold">Post A Job</div>
	<div>
		<input
			bind:this={jobTitle}
			type="text"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Job Title"
		/>
	</div>
	<div class=" grid grid-cols-2 gap-3">
		<div class="">
			<input
				bind:this={jobTags}
				type="text"
				class=" h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="Job Tags"
			/>
		</div>
		<input
			bind:this={jobRole}
			type="text"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Job Role"
		/>
	</div>

	<!-- Salary below -->
	<div class="text-md font-semibold">Salary</div>
	<div class=" grid grid-cols-2 gap-3">
		<div class="">
			<input
				bind:this={minimumSalary}
				type="number"
				min="1"
				class=" h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="Minimum Salary"
			/>
		</div>
		<input
			bind:this={maximumSalary}
			type="number"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Maximum Salary"
		/>
	</div>
	<!-- advanced information -->
	<div class="text-md font-semibold">Advanced Information</div>
	<div class=" grid grid-cols-3 gap-3">
		<div class="">
			<input
				bind:this={education}
				type="text"
				class=" h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="Education"
			/>
		</div>
		<input
			bind:this={experience}
			type="text"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Experience"
		/>
		<input
			bind:this={jobType}
			type="text"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Job Type"
		/>
	</div>
	<!-- Location -->
	<div class="text-md font-semibold">Location</div>
	<div class=" grid grid-cols-2 gap-3">
		<input
			bind:this={country}
			type="text"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Country"
		/>
		<input
			bind:this={city}
			type="text"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="City"
		/>
		<div>
			<input
				bind:this={city}
				type="checkbox"
				class="text-nowrap rounded-sm border-blue-300 text-base font-normal leading-normal text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="City"
			/>
			<label class="capitalize text-gray-500" for="">fully Remote Position</label>
		</div>
	</div>
	<!-- Job benefit -->
	<div class="text-md font-semibold">Job Benefit</div>
	<div class="">
		<input
			bind:this={jobBenefit}
			type="text"
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Job Benefits"
		/>
	</div>
	<div class="text-md font-semibold">Job Description</div>
	<div class="">
		<textarea
			bind:this={jobDescription}
			class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Job Description"
		/>
	</div>
	<ActionButton buttonBg="blue-700" textColor="white" hoverColor="blue-400">
		<span slot="text">Post Job</span>
	</ActionButton>
</div>
