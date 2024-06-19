<script lang="ts">
	import ActionButton from './ActionButton.svelte';
	import arrow from '$lib/icon/fi_arrow-right.png';
	import photo from '$lib/icon/Candidate & Employers.png';
</script>

<div class="grid w-full grid-cols-2 items-center justify-center gap-6 px-20 py-24">
	<!-- first row -->
	<div
		class="relative inline-flex h-full w-full flex-col items-start justify-start gap-6 rounded-xl p-12"
	>
		<img src={photo} class="absolute left-0 top-0 h-full bg-cover -z-10" alt="" />
		<div class="flex flex-col items-start justify-start gap-4">
			<div class="w-96 text-3xl font-medium leading-10 text-gray-800">Become a Candidate</div>
			<div class="w-80 text-sm font-normal leading-tight text-gray-500 opacity-80">
				Join our community of job seekers and take the next step in your career. Register now to
				create your profile, upload your CV, and start applying for jobs tailored to your skills.
			</div>
		</div>

		<ActionButton buttonBg="white" textColor="blue-700" hoverColor="blue-100">
			<span class="flex gap-1 text-nowrap" slot="text">
				Register Now
				<span><img src={arrow} alt="arrow" /></span>
			</span>
		</ActionButton>
	</div>
	<!-- ends -->

	<!-- second row -->
	<div
		class="flex h-80 w-full items-center justify-center rounded-xl bg-blue-700 text-center text-3xl font-medium leading-10 text-white"
	>
		<span>Become a Candidate </span>
	</div>
	<!-- end -->
</div>
