// handle login request to superbase

import { signin } from "$lib/supabase/store.js";
import { json } from "@sveltejs/kit";

// @ts-ignore 
export async function POST({ request, cookies }) {
    const { email1, pass } = await request.json();

    const { SessionFromdb } = await signin(email1, pass);
    let supabaseError = SessionFromdb.error;
    let supabaseSession = SessionFromdb.data.session;
    if (SessionFromdb.error !== null) {
        // if the error is not null or the error is something or if there is error do this 
        supabaseSession = null;
        return json({ supabaseError, supabaseSession }, { status: 201 });

    } else if (SessionFromdb.data !== null) {
        // if ther is no error on login or the login is complete do this 
        supabaseError = null;
        // @ts-ignore 
        cookies.set('userSession', supabaseSession?.user.id, { path: '/' });
        const cookieVariable = supabaseSession?.user.id;
        return json({ supabaseSession, supabaseError, cookieVariable }, { status: 201 });
    }

}