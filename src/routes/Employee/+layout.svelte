<script lang="ts">
	import Nav from '$lib/components/Navigation.svelte';
    import NavButton from "$lib/components/NavButton.svelte"
</script>

<div>
	<Nav />
	<div class="flex flex-row items-start justify-start px-20">
        <!-- dashboard navigation -->
		<div class="flex w-[300px] flex-col gap-3 pl-5">
			<span class="font-mono text-sm text-gray-500">EMPLOYEE DASHBOARD</span>
			<span>
				<NavButton location="/Dashboard">
                    <span slot="text">Overview</span>
                </NavButton>
			</span>
			<span>
				<NavButton location="/Dashboard/Applied_Jobs">
                    <span slot="text">Applied Jobs</span>
                </NavButton>
			</span>
            <span>
				<NavButton location="/Dashboard/Favourite_Jobs">
                    <span slot="text">Favourite Jobs</span>
                </NavButton>
			</span>
            <span>
				<NavButton location="/Dashboard/Job_Alert">
                    <span slot="text">Job Alert</span>
                </NavButton>
			</span>
            <span>
				<NavButton location="/Dashboard/Settings">
                    <span slot="text">Settings</span>
                </NavButton>
			</span>
            
		</div>

		<div class="p-5 w-full"><slot/></div>
	</div>
</div>
