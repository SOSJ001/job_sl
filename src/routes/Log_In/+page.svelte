<script>
	// @ts-nocheck
	import { goto } from '$app/navigation';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import {url_path} from '$lib/supabase/store'
	import {cookieUserId} from '$lib/supabase/store'

	let email //login email
	let password; //login password
	let signinFunction = async() => {
		let mail = email.value
		let passcode = password.value
		// alert("email is: "+ email.value + " password is: "+ password.value)
		const response = await fetch('/Log_In/Login_Api', {
			method: 'POST',
			body: JSON.stringify({ mail, passcode }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		//destructing the response object
		const { supabaseError, supabaseSession, cookieVariable } = await response.json(); //wait for the responso from the server
		// console.log('this is the cookie variable', supabaseSession);
		$cookieUserId = cookieVariable
		$url_path = supabaseSession.user.user_metadata.role;
		goto(`/Dashboard/${$url_path}`)
	};
</script>

<div class="flex h-screen w-full flex-row items-center justify-center overflow-hidden">
	<div class="justify flex flex-col gap-7 p-5 md:w-[500px]">
		<div class="flex flex-row justify-between">
			<span class="font-mono text-2xl font-bold">Sign In</span>
			<a href="/">
				<ActionButton
					hoverColor="blue-400"
					textColor="white"
					buttonBg="blue-700"
					buttonborder="blue-700"
				>
					<span slot="text"> Back</span>
				</ActionButton></a
			>
		</div>

		<span
			>Aready have an account? <a href="Create_Account" class="text-blue-700">Create an account</a
			></span
		>
		<form action="" class=" space-y-5">
			<!-- email input field -->
			<!-- <Input id="email" type="email" placeholder="name@flowbite.com"/> -->
			<input bind:this={email}
				type="email"
				class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="michaelsosj@gmail.com"
			/>

			<!-- password input field -->
			<input bind:this={password}
				type="password"
				class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="*********"
			/>
			<div class="item flex flex-row justify-between">
				<div>
					<input type="checkbox" name="rememberMe" id="rememberMe" />
					<label for="rememberMe">Remember Me</label>
				</div>
				<a href="/Forget_Password" class="font-semibold text-blue-700">Forget password</a>
			</div>
			<button on:click={signinFunction} class="w-full">
				<ActionButton
					hoverColor="blue-400"
					width="full"
					textColor="white"
					buttonBg="blue-700"
					buttonborder="blue-700"
				>
					<span slot="text"> Sign In</span>
				</ActionButton>
			</button>
		</form>
	</div>
</div>
