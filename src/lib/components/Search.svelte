<script lang="ts">
	import search from '$lib/icon/fi_search.png';
	import map from '$lib/icon/fi_map-pin.png';
</script>

<div class="flex w-full items-center justify-between gap-3">
	<!-- search icon below -->
	<div class="flex w-full gap-3">
		<button class="w-7">
			<img alt="search" src={search} class="h-6" />
		</button>
		<input
			class="h-full w-full text-nowrap text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Job tittle, keyword..."
		/>
	</div>

	<div class="h-px w-8 rotate-90 border border-zinc-200"></div>

	<div class="flex h-full w-full items-center justify-center gap-3">
		<!-- location icon below -->
		<button class="w-7">
			<img alt="search" src={map} class="h-6 w-6" />
		</button>

		<input
			class="h-full w-full text-nowrap text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
			placeholder="Your Location"
		/>
	</div>
</div>
