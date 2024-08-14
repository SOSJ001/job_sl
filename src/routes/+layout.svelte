<script>
	import '../app.css';
	import { cookieUserId, url_path } from '$lib/supabase/store';
	// @ts-ignore
	// @ts-ignore
	export let data;

	// @ts-ignore
	$: {
		// @ts-ignore
		$cookieUserId = data.cookievar1;
		// @ts-ignore
		$url_path = data.cookievar1;
	}
</script>

<slot></slot>

<style></style>
