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
				<NavButton location="/Employee">
                    <span slot="text">Overview</span>
                </NavButton>
			</span>
			<span>
				<NavButton location="/Employee/Profile">
                    <span slot="text">Employers Profile</span>
                </NavButton>
			</span>
            <span>
				<NavButton location="/Employee/Post_A_Job">
                    <span slot="text">Post a Job</span>
                </NavButton>
			</span>
            <span>
				<NavButton location="/Employee/Saved_Candidates">
                    <span slot="text">Saved Candidates</span>
                </NavButton>
			</span>
            <span>
				<NavButton location="/Employee/Plans_Billings">
                    <span slot="text">Plans & Billing</span>
                </NavButton>
			</span>
			 <span>
				<NavButton location="/Employee/All_Companies">
                    <span slot="text">All Companies</span>
                </NavButton>
			</span>
			<span>
				<NavButton location="/Employee/Settings">
                    <span slot="text">Settings</span>
                </NavButton>
			</span>
            
		</div>

		<div class="p-5 w-full"><slot/></div>
	</div>
</div>
