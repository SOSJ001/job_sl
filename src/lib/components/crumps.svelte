<script lang="ts">
  import { page } from "$app/stores";
    $: activeUrl = $page.url.pathname;
</script>
<div class="w-full h-20 px-20 py-6 bg-gray-100 justify-between items-center inline-flex">
  <div class="text-center text-zinc-900 text-lg font-medium  leading-7">Find Job</div>
  <div class="justify-start items-start gap-2 flex">
    <div class="text-gray-500 text-sm font-normal  leading-tight">Home</div>
    <div class="text-zinc-900 text-sm font-normal  leading-tight"><slot name="location">{activeUrl}</slot></div>
  </div>
</div>