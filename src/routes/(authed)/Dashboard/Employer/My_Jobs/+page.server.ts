//redirect to the home page if not logged in
import { jobAndApplicants, loadJobRows } from '$lib/supabase/store.js';

export function load() {
	const jobTableResult = loadJobRows();
	const jobAndApplicantsResults = jobAndApplicants()
	// console.log("loggint \n", jobTableResult)
	return { jobTableResult, jobAndApplicantsResults };
}
