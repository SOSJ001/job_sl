<script lang="ts">
	import VacanciesComponents from "./VacanciesComponents.svelte";

</script>

<div
	class="inline-flex w-full flex-col items-start justify-start gap-12 bg-white px-20 py-24 shadow-inner"
>
    <!-- top row -->
	<div class="text-4xl font-medium leading-10 text-zinc-900">
		Most Popular Vacancies
	</div>
    <!-- ends -->

    <!-- buttom row -->
	<div class="flex flex-col items-start justify-between gap-5 w-full">
		<VacanciesComponents/>
        <VacanciesComponents/>
        <VacanciesComponents/>
	</div>
    <!-- ends -->
</div>
