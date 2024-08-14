//redirect to the home page if not logged in
//use getSession() on the client and getUser() on server (slower on the client side)
export function load({ cookies }) {
    let cookievar1 : any  = cookies.get('userSession');
    if (cookievar1 === undefined || cookievar1 === null) {
        cookievar1 = null
        // return { cookievar1 }; 
    }
	return { cookievar1 };

}

