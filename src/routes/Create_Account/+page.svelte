<script lang="ts">
	// @ts-nocheck
	import { Tabs, TabItem } from 'flowbite-svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { Input } from 'flowbite-svelte';
	$: candidate = true;
	$: employer = false;
	let activebg: String = 'border-2 border-blue-400'; //active styling for employer or candidate
	let setCandidate = () => {
		employer = false;
		candidate = true;
	};
	let setEmployer = () => {
		candidate = false;
		employer = true;
	};

	// login button function
	let first_name;
	let last_name;
	let email;
	let password;
	let confirmPassword
	$: role  = candidate?"candidate":"employer";
	let sign_up = async() => {
		alert(role);
		// const response = await fetch('/Create_Account/Sign_up_Api', {
		// 	method: 'POST',
		// 	body: JSON.stringify({ first_name, last_name, email, password, role }),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// });

		// //destructing the response object
		// const { supabaseError, supabaseSession, cookieVariable } = await response.json(); //wait for the responso from the server
	};
</script>

<div class="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
	<div class="flex flex-row gap-3 font-mono">
		<button on:click={setCandidate} class="{candidate ? activebg : ''} rounded-lg bg-gray-100 p-5"
			>Candidate</button
		>
		<button on:click={setEmployer} class="{employer ? activebg : ''} rounded-lg bg-gray-100 p-5"
			>Employer</button
		>
	</div>

	<div>
		<div class="justify flex flex-col gap-7 p-5 md:w-[500px]">
			<span class="font-mono text-2xl font-bold"
				>Create account as a {candidate ? 'Candidate' : 'Employer'}</span
			>
			<span>Aready have an account? <a href="Log_In" class="text-blue-700">Log In</a></span>
			<form action="" class=" space-y-5">
				<!-- email input field -->
				<!-- <Input id="email" type="email" placeholder="name@flowbite.com"/> -->
				<div class=" flex flex-row gap-3">
					<input bind:this = {first_name}
						type="text"
						class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
						placeholder="Michael"
					/>
					<input bind:this={last_name}
						type="text"
						class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
						placeholder="Johnson"
					/>
				</div>
				<input bind:this={email}
					type="email"
					class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
					placeholder="michaelsosj@gmail.com"
				/>

				<!-- password input field -->
				<input bind:this={password}
					type="password"
					class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
					placeholder="Password"
				/>
				<input bind:this={confirmPassword}
					type="password"
					class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
					placeholder="Confirm Password"
				/>
				<button class="w-full" on:click={sign_up}>
					<ActionButton
					hoverColor="blue-400"
					width="full"
					textColor="white"
					buttonBg="blue-700"
					buttonborder="blue-700"
				>
					<span slot="text"> Sign Up</span>
				</ActionButton>
				</button>
				
			</form>
		</div>
	</div>
</div>
