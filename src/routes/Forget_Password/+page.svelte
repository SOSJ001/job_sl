<script>
	// @ts-nocheck

	import ActionButton from '$lib/components/ActionButton.svelte';
	import { Input } from 'flowbite-svelte';
</script>

<div class="flex h-screen w-full flex-row items-center justify-center overflow-hidden">
	<div class="justify flex flex-col justify-center gap-5 p-5 md:w-[500px]">
		<span class="font-mono text-2xl font-bold">Forget Password</span>
		<span class="font-mono text-sm font-normal">
			Go back to <a class="text-blue-700" href="Log_In">Sign In</a>
		</span>
		<span>Aready have an account? <a href="Create_Account" class="text-blue-700">Create an account</a></span>

		<form action="" class="w-full text-center">
			<!-- verification code input field -->
			<!-- <Input id="email" type="email" placeholder="name@flowbite.com"/> -->
			<input
				type="text"
				class=" mb-5 h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="Verification Code"
			/>

			<a href="/Reset_Password" class="mb-5">
				<ActionButton
					hoverColor="blue-400"
					width="full"
					textColor="white"
					buttonBg="blue-700"
					buttonborder="blue-700"
				>
					<span slot="text"> Reset Password</span>
				</ActionButton>
			</a>
			<span class="font-mono text-sm font-normal">
				Didn't receive any code! <button class="text-blue-700">Resend</button>
			</span>
		</form>
	</div>
</div>
