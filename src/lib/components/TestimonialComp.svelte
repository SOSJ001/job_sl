<script lang="ts">
	import rating from '$lib/icon/Rating.png';
	import image12 from '$lib/icon/image12.png';
    import quote from "$lib/icon/Vector.png"
</script>

<div class="h-72 w-96 flex flex-col justify-between rounded-xl bg-white p-5 shadow items-center">
    <!-- first row -->
	<div class="inline-flex flex-col items-start justify-start gap-4 w-[350px]">
		<div class="inline-flex h-7 items-start justify-start">
			<img src={rating} alt="ratingstars" />
		</div>
		<div class="text-base font-sm leading-normal text-gray-600">
			"Job SL has been a game-changer for me. The platform's intuitive design made it easy to
			showcase my portfolio and connect with top companies in Sierra Leone. I've landed several
			freelance gigs and full-time offers thanks to Job SL!"
		</div>
	</div>

    <!-- second row   -->
	<div class="inline-flex  w-[350px] items-center justify-between">
		<div class="flex items-center justify-start gap-3">
			<img class="h-14 w-20 rounded-3xl" src={image12} alt="profilePicture" />
			<div class="inline-flex flex-col items-start justify-start gap-1">
				<div class="text-center text-base font-medium leading-normal text-gray-800">
					<slot name="usename">Alex Kargbo</slot>
				</div>
				<div class=" text-sm font-normal leading-tight text-slate-500">
					<slot name="career">UI/UX Designer</slot>
				</div>
			</div>
		</div>
		<div><img alt="quote" src={quote} class="h-12"/></div>
	</div>
</div>
