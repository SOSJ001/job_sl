// handle login request to superbase
import { signOut } from '$lib/supabase/store.js';
import { json } from '@sveltejs/kit';

// @ts-ignore
export async function POST({ cookies }) {
    // let success: boolean = signOutFunction();
    // if (success) {
    //     cookies.delete('userSession', { path: '/' });
    //     console.log("logout is a success")        
    // } else {
    //     console.log("logout is not a success")
    // }
    
	// return json({ success }, { status: 201 });
}

function signOutFunction() {
    signOut().then((error) => {
        let success: boolean = false
         if (error === null) {
              // if there is no error 
             console.log('here+', error);
             success = true;
             console.log('here + success', success);
             return success;
    } else {
             //if there is an error
			console.log('error signing out');
            success = false;
            return success;
		}
     });     
}
