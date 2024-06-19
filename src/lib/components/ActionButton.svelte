<script lang="ts">
    export let hoverColor: string = ""
    export let buttonBg: string = ""
    export let textColor: string = ""
    export let buttonborder: string = "indigo-200"
</script>
<button class="hover:bg-{hoverColor?hoverColor:buttonBg} flex items-center justify-center gap-3 rounded-lg border border-{buttonborder} px-6 py-3 bg-{buttonBg?buttonBg:"transparent"}">
	<div class="text-sm font-semibold capitalize leading-normal text-{textColor?textColor:"black"} text-nowrap"><slot name="text">Sign in</slot></div>
</button>
