<script>
	// @ts-nocheck

	import ActionButton from '$lib/components/ActionButton.svelte';
	import { Input } from 'flowbite-svelte';
</script>

<div class="flex h-screen w-full flex-row items-center justify-center overflow-hidden">
	<div class="justify flex flex-col gap-7 p-5 md:w-[500px]">
		<span class="text-2xl font-bold font-mono">Reset Password</span>
		<span
			>Aready have an account? <a href="Create_Account" class="text-blue-700">Create an account</a
			></span
		>
		<form action="" class=" space-y-5">
			<!-- email input field -->
			<!-- <Input id="email" type="email" placeholder="name@flowbite.com"/> -->
			<input
				type="password"
				class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="Password"
			/>

			<!-- password input field -->
			<input
				type="password"
				class="h-full w-full text-nowrap rounded-sm border-gray-300 text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
				placeholder="Confirm Password"
			/>
			<ActionButton
				hoverColor="blue-400"
				width="full"
				textColor="white"
				buttonBg="blue-700"
				buttonborder="blue-700"
			>
				<span slot="text"> Reset Password</span>
			</ActionButton>
		</form>
	</div>
</div>
