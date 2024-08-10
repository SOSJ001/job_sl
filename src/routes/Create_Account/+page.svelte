<script lang="ts">
	// @ts-nocheck
	import { Tabs, TabItem } from 'flowbite-svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import { Input } from 'flowbite-svelte';
	$: candidate = true;
	$: employer = false;
	let activebg: String = 'border-2 border-blue-400'; //active styling
	let setCandidate = () => {
		employer = false;
		candidate = true;
	};
	let setEmployer = () => {
		candidate = false;
		employer = true;
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
					<input
						type="text"
						class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
						placeholder="Michael"
					/>
					<input
						type="text"
						class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
						placeholder="Johnson"
					/>
				</div>
				<input
					type="email"
					class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
					placeholder="michaelsosj@gmail.com"
				/>

				<!-- password input field -->
				<input
					type="password"
					class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
					placeholder="Password"
				/>
				<input
					type="password"
					class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
					placeholder="Confirm Password"
				/>
				<!-- <div class="item flex flex-row justify-between">
						<div>
							<input type="checkbox" name="rememberMe" id="rememberMe" />
							<label for="rememberMe">Remember Me</label>
						</div>
						<a href="/" class="font-semibold text-blue-700">Forget password</a>
					</div> -->
				<ActionButton
					hoverColor="blue-400"
					width="full"
					textColor="white"
					buttonBg="blue-700"
					buttonborder="blue-700"
				>
					<span slot="text"> Sign Up</span>
				</ActionButton>
			</form>
		</div>
	</div>
</div>
