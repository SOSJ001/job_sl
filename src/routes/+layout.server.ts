//redirect to the home page if not logged in
import { getUser } from '$lib/supabase/store.js';
import { cookieUserId } from '$lib/supabase/store.js';
import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    let cookievar1 : any  = cookies.get('userSession');
    if (cookievar1 === undefined || cookievar1 === null) {
        cookievar1 = null
        // return { cookievar1 }; 
    }
	return { cookievar1 };
}

