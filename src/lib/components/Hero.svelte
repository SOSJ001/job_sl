<script lang="ts">
	import ActionButton from './ActionButton.svelte';
	import illustration from '$lib/icon/Illustration.png';
	import Features from './Features.svelte';
	import building from "$lib/icon/buildings-duotone.png"
	import users from "$lib/icon/users-duotone.png"
	import Search from './Search.svelte';
</script>

<div class="relative h-fit w-full bg-gray-100 px-20 py-8">
	<!-- 1st div with left and right colomn -->
	<div class="flex justify-between">
		<!-- left -->
		<div class="inline-flex w-1/2 flex-col items-start justify-start gap-8">
			<!-- left first row -->
			<div class="flex flex-col items-start justify-start gap-6">
				<div class="w-full text-6xl font-medium text-zinc-900">
					<span>Find a job that suits</span>
					<span>your interest & skills.</span>
				</div>
				<div class="w-full text-lg font-normal leading-7 text-gray-500">
					Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo,
					eget sollicitudin velit bestibulum.
				</div>
			</div>
			<!-- ends -->

			<!-- left second row -->
			<div class="flex flex-col items-start justify-start gap-6">
				<div
					class="inline-flex items-center justify-start gap-3 rounded-lg border border-zinc-200 bg-white p-3 shadow"
				>
					<div class="flex items-center justify-center">
						<!-- search input -->
						<Search/>
					</div>

					<ActionButton buttonBg="blue-700" textColor="white" hoverColor="blue-400"
						><span slot="text">Find Job</span></ActionButton
					>
				</div>

				<div class="inline-flex items-start justify-start gap-1">
					<div class="text-center text-sm font-normal leading-tight text-gray-400">Suggestion:</div>
					<div class="text-center text-sm font-normal leading-tight text-neutral-600">
						Designer,
					</div>
					<div class="text-center text-sm font-normal leading-tight text-neutral-600">
						Programing,
					</div>
					<div class="text-center text-sm font-medium leading-tight text-blue-700">
						Digital Marketing,
					</div>
					<div class="text-center text-sm font-normal leading-tight text-neutral-600">Video,</div>
					<div class="text-center text-sm font-normal leading-tight text-neutral-600">
						Animation.
					</div>
				</div>
			</div>
			<!-- row ends -->
		</div>
		<!-- left ends -->
		<!-- right column -->
		<div class="w-1/2 flex justify-center items-center">
			<img src={illustration} alt="illustration" />
		</div>
		<!-- right column ends -->
	</div>
	<!--1st div left and right column ends -->

    <!-- 2nd div -->
	<div class="inline-flex w-full items-center justify-between gap-5">
		<Features/>
		<Features iconBg="blue-700">
			<span slot="icon"><img src={building} alt="building_icon"></span>
			<span slot="number">969</span>
			<span slot="text">Companies</span>
		</Features>
		<Features>
			<span slot="icon"><img src={users} alt="building_icon"></span>
			<span slot="number">10,560</span>
			<span slot="text">Candidates</span>
		</Features>
		<Features>
			<span slot="number">676</span>
			<span slot="text">New Jobs</span>
		</Features>
	</div>

    <!-- 2nd div ends -->
</div>
