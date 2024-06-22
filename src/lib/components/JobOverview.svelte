<script lang="ts">
    import JobOverviewComp from "./JobOverviewComp.svelte";
    import calender from "$lib/icon/CalendarBlank.png"
    import time from "$lib/icon/Timer.png"
    import layer from "$lib/icon/Stack.png"
    import wallet from "$lib/icon/Wallet.png"
    import briefcase from "$lib/icon/briefcase-duotone.png"




</script>
<div class="grid grid-cols-3 gap-y-5">
    <JobOverviewComp>
        <span slot="icon"><img src={calender} alt="icon"></span>
    </JobOverviewComp>
    <JobOverviewComp>
        <span slot="icon"><img src={time} alt="icon"></span>
    </JobOverviewComp>
    <JobOverviewComp>
        <span slot="icon"><img src={layer} alt="icon"></span>
    </JobOverviewComp>
    <JobOverviewComp>
        <span slot="icon"><img src={wallet} alt="icon"></span>
    </JobOverviewComp>
    <JobOverviewComp>
        <span slot="icon"><img src={calender} alt="icon"></span>
    </JobOverviewComp>
</div>