//redirect to the home page if not logged in
import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const cookieVariable = cookies.get('userSession');
	// console.log("here", cookieVariable);
	if (cookieVariable === undefined || cookieVariable === null || cookieVariable === "") {
		// console.log('cookie not set');
		throw redirect(302, '/');
	}
}