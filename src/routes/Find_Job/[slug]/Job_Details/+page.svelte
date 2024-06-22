<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Crumps from '$lib/components/crumps.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import africell from '$lib/icon/AfricellLogo.png';
	import Blue from '$lib/icon/BookmarkSimpleBlue.png';
	import ActionButton from '$lib/components/ActionButton.svelte';
	import map from '$lib/icon/MapTrifold.png';
	import JobOverview from '$lib/components/JobOverview.svelte';
	import link from '$lib/icon/LinkSimple.png';
    import linkedin from "$lib/icon/linkedinicon.png"
    import facebook from "$lib/icon/facebook icon.png"
    import twitter from "$lib/icon/twitterbutton.png"
    import envelope from "$lib/icon/Envelope.png"
    import RelatedJobs from "$lib/components/FeaturedJobComp.svelte"

</script>

<Navigation />
<Crumps />
<div class=" space-y-5 px-20 py-24">
	<!-- 1st row  -->
	<div class="flex flex-row items-center justify-between">
		<!-- left col  -->
		<div class="flex flex-row items-center gap-3">
			<div>
				<img src={africell} alt="company logo" />
			</div>
			<div class="space-y-2 text-sm">
				<div class="font-bold">Senior_UI_UX_Designer</div>
				<div class="flex gap-1">
					<span>at Africell</span>
					<span
						class="flex items-center justify-center rounded bg-green-600 px-3 py-0.5 text-xs font-semibold uppercase leading-3 text-white"
					>
						<div><slot name="role">FULL TIME</slot></div>
					</span>
					<span
						class="flex w-fit items-start justify-start gap-2.5 rounded-3xl bg-rose-50 px-3 py-0.5"
					>
						<div class="text-sm font-normal leading-tight text-red-500">Featured</div>
					</span>
				</div>
			</div>
		</div>
		<!-- left col ends  -->

		<!-- right col -->
		<div class="flex flex-row items-center gap-3">
			<button class="rounded bg-gray-200 p-1 hover:bg-indigo-200">
				<img src={Blue} alt="bookmark_icon" />
			</button>
			<ActionButton hoverColor="blue-400" buttonBg="blue-700" textColor="white">
				<div class="flex gap-1" slot="text"><span> Apply Now</span></div>
			</ActionButton>
		</div>
		<!-- right col ends  -->
	</div>

	<!-- 2nd row  -->
	<div class="grid grid-cols-2 items-start justify-center gap-5">
		<div class="space-y-3">
			<div class="font-bold">Job Description</div>
			<div>
				Africell is a Shopify Plus agency, and we partner with brands to help them grow, we also do
				the same with our people! Here at Velstar, we don't just make websites, we create
				exceptional digital experiences that consumers love. Our team of designers, developers,
				strategists, and creators work together to push brands to the next level. From Platform
				Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven
				track record in delivering outstanding eCommerce solutions and driving sales for our
				clients. The role will involve translating project specifications into clean, test-driven,
				easily maintainable code. You will work with the Project and Development teams as well as
				with the Technical Director, adhering closely to project plans and delivering work that
				meets functional & non-functional requirements. You will have the opportunity to create new,
				innovative, secure and scalable features for our clients on the Shopify platform
				<div>Want to work with us? You're in good company!</div>
			</div>
			<div class="font-bold">Requirement</div>
			<ul class="list-disc">
				<li>
					Great troubleshooting and analytical skills combined with the desire to tackle challenges
					head-on
				</li>
				<li>
					3+ years of experience in back-end development working either with multiple smaller
					projects simultaneously or large-scale applications
				</li>
				<li>
					Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel Working regularly with
					APIs and Web Services (REST, GrapthQL, SOAP, etc)
				</li>
				<li>
					Have experience/awareness in Agile application development, commercial off-the-shelf
					software, middleware, servers and storage, and database management.
				</li>
				<li>
					Familiarity with version control and project management systems (e.g., Github, Jira)
				</li>
				<li>
					Great troubleshooting and analytical skills combined with the desire to tackle challenges
					head-on
				</li>
				<li>Ambitious and hungry to grow your career in a fast-growing agency</li>
			</ul>
			<div class="font-bold">Desirable</div>
			<ul class="list-disc">
				<li>
					Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento,
					WooCommerce, Visualsoft to enable seamless migrations.
				</li>
				<li>Working knowledge of payment gateways</li>
				<li>API platform experience / Building restful APIs</li>
			</ul>
			<div class="font-bold">Benefit</div>
			<ul class="list-disc">
				<li>
					Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your
					choice from the bar)
				</li>
				<li>
					28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day
					off on your birthday
				</li>
				<li>Generous annual bonus.</li>
				<li>Healthcare package</li>
				<li>Paid community days to volunteer for a charity of your choice</li>
				<li>£100 contribution for your own personal learning and development</li>
				<li>Free Breakfast on Mondays and free snacks in the office</li>
				<li>
					Access to Perkbox with numerous discounts plus free points from the company to spend as
					you wish.
				</li>
				<li>Cycle 2 Work Scheme Brand</li>
				<li>new MacBook Pro</li>
				<li>
					Joining an agency on the cusp of exponential growth and being part of this exciting story.
				</li>
			</ul>
		</div>
		<div class="w-full items-start justify-start">
			<div
				class="flex h-40 w-full items-center justify-center rounded-lg border-2 border-sky-100 p-8"
			>
				<div class="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-3">
					<div class="self-stretch text-center text-base font-medium leading-normal text-zinc-900">
						Salary (SL)
					</div>
					<div class="flex h-12 flex-col items-center justify-center gap-1 self-stretch">
						<div class="text-center text-xl font-medium leading-normal text-green-600">
							SLE 10,000 - SLE 12,000
						</div>
						<div class="self-stretch text-center text-sm font-normal leading-tight text-gray-500">
							Yearly salary
						</div>
					</div>
				</div>
				<!-- divider  -->
				<div class="w-1 self-stretch border-2 border-sky-100"></div>
				<!-- divider ends  -->

				<div class="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2">
					<!-- map icon here  -->
					<div class=" h-9 w-9">
						<img src={map} alt="maptrifold" class="h-9 w-9" />
					</div>
					<!-- map end -->
					<div class="flex h-12 flex-col items-center justify-center gap-0.5 self-stretch">
						<div
							class="self-stretch text-center text-base font-medium leading-normal text-zinc-900"
						>
							Job Location
						</div>
						<div
							class="self-stretch text-center text-base font-normal leading-normal text-gray-500"
						>
							Freetown, Sierra Leone
						</div>
					</div>
				</div>
			</div>
			<div class="my-24 border-2 border-sky-100 p-8 space-y-5">
				<JobOverview />
				<div class="border-2 border-sky-100 p-8 space-y-3">
					<div class="text-2xl font-bold">Share this job:</div>
					<div class="flex gap-2">
						<button
							class="inline-flex h-10 w-36 items-center justify-center gap-1.5 rounded bg-sky-100 px-4 py-2"
						>
							<div class="h-6 w-6">
								<img src={link} alt="link_logo" class="h-6 w-6" />
							</div>
							<div class="text-base font-medium leading-normal text-blue-700">Copy Links</div>
						</button>
						<button
							class="inline-flex h-10 w-10 items-center justify-center gap-1.5 rounded bg-sky-100 p-2.5"
						>
							<img src={linkedin} alt="linkedin_logo" class="relative h-5 w-5"/>
                    </button>
                    <button
							class="inline-flex h-10 w-10 items-center justify-center gap-1.5 rounded bg-sky-100 p-2.5"
						>
							<img src={facebook} alt="linkedin_logo" class="relative h-5 w-5"/>
                    </button>
                    <button
							class="inline-flex h-10 w-10 items-center justify-center gap-1.5 rounded bg-sky-100 p-2.5"
						>
							<img src={twitter} alt="linkedin_logo" class="relative h-5 w-5"/>
                    </button>
                    <button
							class="inline-flex h-10 w-10 items-center justify-center gap-1.5 rounded bg-sky-100 p-2.5"
						>
							<img src={envelope} alt="linkedin_logo" class="relative h-5 w-5"/>
                    </button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div>
    <div class="font-bold px-20 text-2xl">
        Related Jobs
    </div>
    <div class="grid grid-cols-3 gap-5 px-20 pb-24">
        <RelatedJobs/>
        <RelatedJobs/>
        <RelatedJobs/>
        <RelatedJobs/>
        <RelatedJobs/>
        <RelatedJobs/>


    </div>
</div>
<Footer />
