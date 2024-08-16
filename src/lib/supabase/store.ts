import { writable } from 'svelte/store';
import { supabase } from './connection';
export let cookieUserId = writable(null);
export let url_path = writable(null);
export async function signin(email: string, password: string) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});
	return {
		SessionFromdb: {
			data,
			error
		}
	};
}

export async function signup(
	first_name: string,
	last_name: string,
	email: string,
	password: string,
	role: string
) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				first_name,
				last_name,
				role
			}
		}
	});
	return {
		SessionFromdb: {
			data,
			error
		}
	};
}

// use this on the server side
export async function getUser() {
	const { data, error } = await supabase.auth.getUser();
	return {
		data,
		error
	};
}

// use this on the client side
export async function getSession() {
	const { data, error } = await supabase.auth.getUser();
	return {
		data,
		error
	};
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	return error;
}

export async function insertIntoJobTable(
	jobTitle: string,
	jobTags: string,
	jobRole: string,
	minimumSalary: string,
	maximumSalary: string,
	education: string,
	experience: string,
	jobType: string,
	country: string,
	city: string,
	remote: string,
	jobBenefit: string,
	jobDescription: string,
	employer_id: string
) {
	const { error } = await supabase.from('jobTable').insert({
		jobTitle: jobTitle,
		jobTags: jobTags,
		jobRole: jobRole,
		minSalary: minimumSalary,
		maxSalary: maximumSalary,
		education: education,
		experience: experience,
		jobType: jobType,
		country: country,
		city: city,
		remote: remote,
		jobBenefit: jobBenefit,
		jobDescription: jobDescription,
		employer_id: employer_id
	});
	return error;
}

export async function loadJobRows() {
	let { data: jobTable, error } = await supabase.from('jobTable').select('*');
	return jobTable;
}

export async function insertIntoAppliedJobs(job_id: string, user_id: string) {
	const { error } = await supabase.from('appliedJobs').insert({
		job_id: job_id,
		user_id: user_id
	});
	return error;
}

export async function loadAppliedJobRows() {
	let { data: AppliedJob, error } = await supabase.from('appliedJobs').select('*');
	return AppliedJob;
}


export async function appliedjobsview() {
	let { data: appliedjobsview, error } = await supabase.from('appliedjobsview').select('*');
	return appliedjobsview;
}

export async function jobAndApplicants() {
	let { data: jobandapplicants, error } = await supabase.from('jobandapplicants').select('*');
	return jobandapplicants;
}

export async function checkAppliedJobs(job_id: Int8Array, user_id: string) {
	let { data: appliedJobs, error } = await supabase
		.from('appliedJobs')
		.select('*')
		.eq('job_id', job_id)
		.eq('user_id', user_id);
	if (error) {
		console.log("check applied job function error \n",error)
	}
	if (appliedJobs !== null) {
		return appliedJobs;
	}
}

export async function updateCandidateStatus(status: string, applied_id: Int8Array) {
	const { data, error } = await supabase
		.from('appliedJobs')
		.update({ status: status })
		.eq('id', applied_id)
		.select();
	return{data, error}
}

