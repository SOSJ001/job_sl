import { supabase } from './connection';

export async function signin(email: string, password: string) {
	const { data, error } = await supabase.auth.signUp({
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
	password: string
) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				first_name,
				last_name
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
