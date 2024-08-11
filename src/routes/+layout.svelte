<script>
	import '../app.css';
	import { cookieUserId, getUser, url_path } from '$lib/supabase/store';
	// @ts-ignore
	// @ts-ignore
	export let data;
	// @ts-ignore

	// @ts-ignore
	async function user() {
		const user = await getUser();
		const userData = user.data.user;
		const userError = user.error;
		return {
			userData,
			userError
		};
	}

// @ts-ignore
		$: {
		// @ts-ignore
		$cookieUserId = data.cookievar1;
		// get the user from supabase session
		// @ts-ignore
		$url_path = data.cookievar1
	}
</script>

<slot></slot>

<style></style>
