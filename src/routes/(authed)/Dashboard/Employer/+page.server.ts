//redirect to the home page if not logged in
import { loadJobRows } from '$lib/supabase/store.js';

export function load() {
	const recentJobTableResult = loadJobRows();
	// console.log("loggint \n", jobTableResult)
	return { recentJobTableResult };
}
