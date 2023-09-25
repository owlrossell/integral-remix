import {createCookieSessionStorage, redirect} from "@remix-run/node";

const {getSession, commitSession, destroySession} = createCookieSessionStorage({
    cookie: {
        name: 'userSession',
        secure: false,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 3,
        httpOnly: true,
    }
})

export const signIn = async (data) => {
    const profile = await fetch (`http://127.0.0.1:1337/api/auth/local`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await profile.json();
}

export const createUserSession = async (userData, redirectTo) => {
    const session = await getSession();
    session.set('userData', userData);
    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await commitSession(session),
        }
    })
}

const getUserSession = async (request) => {
    return getSession(request.headers.get('Cookie'));
}

export const logout = async (request) => {
    const session = await getUserSession(request);
    console.log(session);
    return redirect('/', {
        headers: {
            'Set-Cookie': await destroySession(session),
        }
    })
}

export const getUserDate = async (request) => {
    const session = await getUserSession(request);
    const userData = session.get('userData');
    if(!userData) return null;
    return userData;
}