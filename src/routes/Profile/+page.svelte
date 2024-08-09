<script lang="ts">
	import Nav from '$lib/components/Navigation.svelte';
	import Skills from '$lib/components/skills.svelte';
	import Pp from '$lib/icon/profilePicture.png';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import BasicInfo from '$lib/components/BasicInfo.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />
<div class="itams center flex flex-row justify-between gap-3 bg-neutral-200 px-20 py-7">
	<!-- 1st col  -->
	<div class="flex h-full w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-white p-5">
		<div class="flex w-full flex-col items-center justify-center">
			<img src={Pp} alt="profile_pictue" class="h-52 w-56" />
			<div class="flex flex-col items-center justify-center text-2xl">
				<span class="text-blue-700 font-bold">Michael S.O.S</span>
				<span>Software Engineer and Multimedia Specialist</span>
			</div>
		</div>
		<div class="text-center">
			As a seasoned Software Engineer specialist with over 5 years of experience, I specialize in
			diagnosing and resolving technical issues swiftly and effectively. My background in
			Information Technology, combined with my hands-on experience, allows me to tackle challenges
			head-on and deliver top-notch support
		</div>
		<div class="w-full space-y-1">
			<div class="text-2xl">Skills</div>
			<div class="grid grid-cols-4 gap-3">
				<Skills /><Skills /><Skills /><Skills /><Skills /><Skills /><Skills />
			</div>
		</div>

		<div class="flex w-full flex-col gap-1">
			<div class="text-xl">Add Notes</div>
			<textarea
				class="h-36 w-full rounded-xl border-none bg-zinc-300"
				placeholder="Add for future reference"
			/>
			<ActionButton buttonBg="blue-700" textColor="white" hoverColor="blue-400">
				<span slot="text">Add Notes</span>
			</ActionButton>
		</div>
	</div>
	<!-- 2nd col  -->
	<div class="h-full w-1/2 space-y-4">
		<BasicInfo />
		<Experience />
		<Accordion />
		<Accordion Header="Accomplishment" />
		<Accordion Header="Certification" />
	</div>
</div>
<Footer/>
