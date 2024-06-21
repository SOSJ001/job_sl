<script>
	import NavButton from './NavButton.svelte';
	import Phonecall from '$lib/icon/PhoneCall.png';
	import Image_1 from '$lib/icon/USA_flag.png';
	import sl_1 from '$lib/icon/sl 1.png';
	import search from '$lib/icon/fi_search.png';
	import logo from '$lib/icon/Logo.png';
	import ActionButton from './ActionButton.svelte';
</script>

<div class="items-between flex w-full flex-col justify-between bg-white shadow-inner">
	<div class="full inline-flex items-center justify-between bg-gray-100 px-20">
		<div class="flex items-start justify-start gap-6">
			<NavButton />
			<NavButton location="/Find_Job">
				<span slot="text">Find Job</span>
			</NavButton>
			<NavButton location="/employers">
				<span slot="text">Employers</span>
			</NavButton>
			<NavButton location="candidates">
				<span slot="text">Candidates</span>
			</NavButton>
			<NavButton location="pricingPlans">
				<span slot="text">Pricing Plans</span>
			</NavButton>
			<NavButton location="customerSupport">
				<span slot="text">Customer Supports</span>
			</NavButton>
		</div>
		<div class="flex items-center justify-start gap-6">
			<div class="flex items-center justify-start gap-2">
				<div class="flex h-6 w-6 items-center justify-center">
					<img alt="phonelogo" class="relative h-6 w-6" src={Phonecall} />
				</div>
				<div class="text-sm font-medium leading-tight text-zinc-900">+23234202794</div>
			</div>
			<div class="flex items-center justify-center gap-3">
				<img alt="USA_flag" class="h-4 w-6" src={Image_1} />
				<select
					class="inline-flex items-center justify-center gap-1 self-stretch border-0 bg-transparent"
				>
					<option selected class="text-sm font-normal leading-tight text-gray-500">English</option>
				</select>
			</div>
		</div>
	</div>
	<div class="inline-flex w-full items-center justify-between gap-[25px] bg-white px-20 py-5">
		<!-- left -->
		<div class="flex gap-1">
			<!-- logo  -->
			<div><img src={logo} alt="jobsl_logo" /></div>
			<div class="h-12 rounded border border-zinc-200 bg-white pl-5">
				<div class="inline-flex h-full w-[600px] items-center justify-center gap-5">
					<!-- left left -->
					<div class="flex items-center justify-center gap-1">
						<!-- country flag below -->
						<img alt="flag" class="h-5 w-7" src={sl_1} />
						<select
							class="inline-flex items-center justify-center gap-1 self-stretch border-0 bg-transparent focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
						>
							<option selected class="text-nowrap text-sm font-normal leading-tight text-gray-500"
								>Sierra Leone</option
							>
						</select>
					</div>
					<!-- left vertical line -->
					<div class="h-px w-8 rotate-90 border border-zinc-200"></div>
					<!-- left- search -->
					<div class="flex h-full w-full items-center justify-center gap-3">
						<!-- search icon below -->
						<button class="w-7">
							<img alt="search" src={search} class="h-6 w-6" />
						</button>

						<input
							class="h-full w-full text-nowrap text-base font-normal leading-normal text-gray-400 focus:border-transparent focus:outline-none focus:ring-0 focus:ring-transparent"
							placeholder="Job tittle, keyword, company"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- left ends -->
		<!-- right -->
		<div class="flex items-center justify-start gap-3">
			<ActionButton textColor="blue-700" hoverColor="indigo-200" />
			<ActionButton textColor="white" buttonBg="blue-700" hoverColor="blue-400">
				<span slot="text">Post a Job</span>
			</ActionButton>
		</div>
		<!-- right ends -->
	</div>
</div>
