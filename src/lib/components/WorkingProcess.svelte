<script lang="ts">
	import WorkingProcessComp from "./WorkingProcessComp.svelte";
    import cloud from "$lib/icon/cloud-arrow-up-duotone.png"
    import magnifying from "$lib/icon/magnifying-glass-plus-duotone.png"
	import circle from "$lib/icon/circle-wavy-check-duotone.png"
	import arrow1 from "$lib/icon/Arrows1.png"
	import arrow2 from "$lib/icon/Arrows2.png"
	import arrow3 from "$lib/icon/Arrows3.png"

</script>

<div
	class="inline-flex w-full flex-col items-center justify-center gap-12 bg-gray-100 px-20 py-24"
>
<!-- top row -->
	<div class="text-center  text-4xl font-medium leading-10 text-zinc-900">
		How JobSL work
	</div>
    <!-- ends -->
	<div class="relative flex gap-10">
		<WorkingProcessComp/>
		<WorkingProcessComp compBg="white" background="blue-700"> 
            <span slot="icon"><img src={cloud} alt=""></span>
			<span slot="title">Upload CV/Resume</span>
        </WorkingProcessComp>
		<WorkingProcessComp>
            <span slot="icon"><img src={magnifying} alt=""></span>
			<span slot="title">Find Suitable Job</span>
        </WorkingProcessComp>
		<WorkingProcessComp>
            <span slot="icon"><img src={circle} alt=""></span>
			<span slot="title">Appiy Job</span>
        </WorkingProcessComp>
		<img src={arrow1} alt="arrow" class="absolute top-0 left-[150px] w-[200px]"/>
		<img src={arrow2} alt="arrow" class="absolute top-[70px] left-[470px] w-[200px]"/>
		<img src={arrow3} alt="arrow" class="absolute top-[0px] left-[770px] w-[200px]"/>

	</div>
</div>
