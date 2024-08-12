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

export async function getUser() {
	const { data, error } = await supabase.auth.getUser();
	return {
		data,
		error
	};
}

export async function signOut() {
	const { error } = await supabase.auth.signOut();
	return error
}
