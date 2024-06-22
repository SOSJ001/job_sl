<script lang="ts">
	import ActionButton from "./ActionButton.svelte";
	import download from '$lib/icon/Download.png';
</script>
<div class="space-y-5 bg-white p-5 rounded-lg">
			<div class="text-2xl">Basic Information</div>
			<div class="grid grid-cols-3 gap-x-2 gap-y-5">
				<div class="text-center">
					<div class="text-neutral-700">Age</div>
					<div>25 YEARS</div>
				</div>
				<div class="text-center">
					<div class="text-neutral-700">Years Of Experience</div>
					<div>25 YEARS</div>
				</div>
				<div class="text-center">
					<div class="text-neutral-700">Phone Number</div>
					<div>+23279084749</div>
				</div>
				<div class="text-center">
					<div class="text-neutral-700">Location</div>
					<div>25 Regent, Hillstation</div>
				</div>
				<div class="text-center">
					<div class="text-neutral-700">Email</div>
					<div>musaconteh2004@gmail.com</div>
				</div>
			</div>
			<div>
				<ActionButton>
					<div slot="text" class="flex h-6 gap-1">
						<img src={download} alt="download_logo" />
						<span>Download Resume</span>
					</div>
				</ActionButton>
			</div>
		</div>