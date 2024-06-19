<script lang='ts'>
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
    export let location: string = "/";

</script>
<a href={location}>
    <div class="py-3.5 bg-gray-100 shadow-inner justify-start items-center gap-1 flex">
        <div class="{location === activeUrl ? "text-blue-700" : "text-gray-500"} text-sm font-medium leading-tight text-nowrap"><slot name='text'>Home</slot></div>
      </div>
</a>