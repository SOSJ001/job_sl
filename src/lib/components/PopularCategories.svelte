<script lang="ts">
	import CategorieComp from './CategorieComp.svelte';
	import code from '$lib/icon/code-duotone.png';
	import megaPhone from '$lib/icon/megaphone-simple-duotone.png';
	import monitor from '$lib/icon/monitor-play-duotone.png';
	import music from '$lib/icon/music-notes-duotone.png';
	import chart from '$lib/icon/chart-bar-horizontal-duotone.png';
	import firstaid from '$lib/icon/first-aid-kit-duotone.png';
	import database from '$lib/icon/database-duotone.png';
</script>

<div
	class="inline-flex w-full flex-col items-start justify-start gap-12 bg-white px-20 py-24 shadow-inner"
>
	<!-- top row -->
	<div class="text-4xl font-medium leading-10 text-zinc-900">Popular Category</div>
	<!-- ends -->

	<!-- buttom row -->
	<div class="grid w-full grid-cols-4 items-start justify-between gap-5">
		<CategorieComp />
		<CategorieComp>
			<span slot="icon"><img src={code} alt="code" /></span>
		</CategorieComp>
		<CategorieComp>
			<span slot="icon"><img src={megaPhone} alt="code" /></span>
		</CategorieComp>
        <CategorieComp>
			<span slot="icon"><img src={monitor} alt="code" /></span>
		</CategorieComp><CategorieComp>
			<span slot="icon"><img src={music} alt="code" /></span>
		</CategorieComp><CategorieComp>
			<span slot="icon"><img src={chart} alt="code" /></span>
		</CategorieComp>
        <CategorieComp>
			<span slot="icon"><img src={firstaid} alt="code" /></span>
		</CategorieComp>
        <CategorieComp iconBg="blue-700">
			<span slot="icon"><img src={database} alt="code" /></span>
		</CategorieComp>
	</div>
	<!-- ends -->
</div>
