// handle login request to superbase
import { signOut } from '$lib/supabase/store.js';
import { json } from '@sveltejs/kit';

// @ts-ignore
export async function POST({ cookies }) {
    let success: boolean = await signOutFunction();
    console.log("post success", success);
	if (success) {
		cookies.delete('userSession', { path: '/' });
		console.log('logout is a success');
	} else {
		console.log('logout is not a success');
	}

	return json({ success }, { status: 201 });
}

async function signOutFunction() {
	let success: boolean;
    let error = await signOut()
		if (error === null) {
			// if there is no error
			console.log('here+', error);
			success = true;
		} else {
			//if there is an error
			success = false;
		}
	return success;
}
