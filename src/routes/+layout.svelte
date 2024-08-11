<script>
	import '../app.css';
	import { cookieUserId, getUser, url_path } from '$lib/supabase/store';
	// @ts-ignore
	export let data;
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

	$: {
		// @ts-ignore
		$cookieUserId = data.cookievar1;
		// get the user from supabase session
		user().then((data1) => {
			if (data1.userData === null) {
				// cookieUserId.set(null); //this is used to handle the navigation buttons but not working
				// cookies.delete('userSession', { path: '/' }); //deleting the cookie
				console.log('layout server userdata not found \n', data1.userData);
			}
			if (data1.userData !== null) {
				$url_path = data1.userData.user_metadata.role
				console.log('layout server userdata below \n', data1.userData);
			}
		});
	}
</script>

<slot></slot>

<style></style>
