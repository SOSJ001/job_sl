//redirect to the home page if not logged in
import { loadAppliedJobRows } from '$lib/supabase/store.js';

export function load() {
	const appliedJobTableResult = loadAppliedJobRows();
	// console.log("loggint \n", jobTableResult)
	return { appliedJobTableResult };
}
