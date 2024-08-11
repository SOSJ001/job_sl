//redirect to the home page if not logged in
import { getUser } from '$lib/supabase/store.js';
import { cookieUserId } from '$lib/supabase/store.js';

export function load({ cookies }) {
 
	// get the user from supabase session
	user().then((data) => {
		console.log('here is me +', data);
		if (data.userData === null) {
            cookieUserId.set(null); //this is used to handle the navigation buttons
			cookies.delete('userSession', { path: '/' });
			console.log('cookie  deleted from the layout');
			// throw redirect(302, '/');
		} else {
            console.log('layout server userdata below \n', data.userData);
		}
    });
    
}

async function user() {
	const user = await getUser();
	const userData = user.data.user;
	const userError = user.error;
	return {
		userData,
		userError
	};
}
