<script lang="ts">
	import TopCompaniesComp from "./TopCompaniesComp.svelte";
    import orange from "$lib/icon/orange.png"
    import zood from "$lib/icon/zoodlabs.png"



</script>
<div
	class="inline-flex w-full flex-col items-center justify-center gap-12 bg-white px-20 py-24 shadow"
>
	<!-- first row -->
	<div class="inline-flex w-full items-center justify-between">
		<div class="text-center text-4xl font-medium leading-10 text-gray-800">Top Companies</div>
	</div>
	<!-- first row ends -->

	<!-- second row -->
	<div class="grid w-full grid-cols-3 items-start justify-start gap-4">
		<TopCompaniesComp/>
        <TopCompaniesComp>
            <span slot="logo"><img src={orange} alt="orange_logo"></span>
        </TopCompaniesComp>
        <TopCompaniesComp/>
        <TopCompaniesComp/>
        <TopCompaniesComp>
            <span slot="logo"><img src={zood} alt="orange_logo"></span>
        </TopCompaniesComp>
        <TopCompaniesComp/>
	</div>
	<!-- second row ends -->
</div>