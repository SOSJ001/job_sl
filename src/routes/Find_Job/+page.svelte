<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Crumps from '$lib/components/crumps.svelte';
	import Search from '$lib/components/Search.svelte';
	import Filter from '$lib/components/filter.svelte';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import FeaturedJobComp from '$lib/components/FeaturedJobComp.svelte';
	import africell from '$lib/icon/AfricellLogo.png';
	import Footer from "$lib/components/Footer.svelte";
</script>

<Navigation />
<Crumps />
<div class="px-20 mb-24">
	<div class="my-3 flex gap-x-3 rounded-lg border border-zinc-200 bg-white p-3">
		<Search />
		<Filter />
		<ActionButton buttonBg="blue-700" textColor="white" hoverColor="blue-400">
			<span slot="text">Find Job</span>
		</ActionButton>
	</div>
	<div class=" grid w-full grid-cols-3 items-start justify-start gap-4">
		<FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
		<FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
		<FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
		<FeaturedJobComp />
		<FeaturedJobComp>
			<span slot="companylogo">
				<img src={africell} alt="africell logo" />
			</span>
		</FeaturedJobComp>
	</div>
</div>
<Footer/>