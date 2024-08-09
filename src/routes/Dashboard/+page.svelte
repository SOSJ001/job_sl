<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import Pp from '$lib/icon/profilePicture.png';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import orange from '$lib/icon/orange.png';
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
			<ActionButton textColor="red-500" buttonBg="white" width="[200px]">
				<span slot="text"> Edit Profile </span>
			</ActionButton>
		</div>
	</div>
	<div class=" flex justify-between font-semibold">
		<span>Recently Applied</span>
		<button class="text-gray-600">View All</button>
	</div>
	<div class="grid grid-cols-2 bg-gray-100 p-5 text-center font-mono font-semibold">
		<div class="bg-red-500">Job</div>
		<div class="grid grid-cols-3">
			<div>Date Applied</div>
			<div>Status</div>
			<div>Action</div>
		</div>
	</div>
	<div class="grid grid-cols-2 justify-between text-center">
		<div class="flex flex-row gap-2">
			<div>
				<div class="h-14 w-14">
					<slot name="companylogo"><img alt="company_logo" class="w-14" src={orange} /></slot>
				</div>
			</div>
			<div class="grid-col-2">
				<div class="flex items-center justify-center">
					<span>Techical Support Specialist</span>
					<span class="text-nowrap rounded-sm bg-green-100 px-2 py-1">
						<div class="text-xs font-semibold uppercase leading-3 text-green-600">
							<slot name="role">Remote</slot>
						</div>
					</span>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-3">
			<div>8th march 2001</div>
			<div>Active</div>
			<div>Applied</div>
		</div>
	</div>
</div>
