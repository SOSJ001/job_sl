//redirect to the home page if not logged in
import { getUser } from '$lib/supabase/store.js';
import { cookieUserId } from '$lib/supabase/store.js';
import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    let cookievar1 = cookies.get('userSession');
    console.log(cookievar1);
	return { cookievar1 };
}
