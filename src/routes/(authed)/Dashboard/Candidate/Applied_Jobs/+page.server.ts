//redirect to the home page if not logged in
import { appliedjobsview, loadAppliedJobRows } from '$lib/supabase/store.js';
export function load() {
	const appliedJobTableResult = loadAppliedJobRows();
	const appliedjobsviewResult = appliedjobsview();
	// console.log("loggint \n", jobTableResult)
	return { appliedJobTableResult, appliedjobsviewResult };
}
