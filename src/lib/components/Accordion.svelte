<script lang="ts">
	import { AccordionItem, Accordion } from 'flowbite-svelte';
    export let Header: string = "Education"
</script>

<Accordion inactiveClass="bg-white">
	<AccordionItem>
		<span class="text-neutral-700" slot="header">{Header}</span>
		<p class="mb-2 text-gray-500 dark:text-gray-400">
			Nothing here yet
		</p>
	</AccordionItem>
</Accordion>
