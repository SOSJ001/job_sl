<script>
    import Hero from '$lib/components/Hero.svelte';
import Nav from '$lib/components/Navigation.svelte'
	import PopularCategories from '$lib/components/PopularCategories.svelte';
	import PopularVacancies from '$lib/components/PopularVacancies.svelte';
	import WorkingProcess from '$lib/components/WorkingProcess.svelte';
	import FeaturedJob from '$lib/components/FeaturedJob.svelte';
	import TopCompanies from '$lib/components/TopCompanies.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Footer from '$lib/components/Footer.svelte';

</script>
<div>
    <Nav/>
    <Hero/>
    <PopularVacancies/>
    <WorkingProcess/>
    <PopularCategories/>
    <FeaturedJob/>
    <TopCompanies/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
</div>
