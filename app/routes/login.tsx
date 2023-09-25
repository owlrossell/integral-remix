qimport FormLogin from "../components/formLogin/FormLogin";
import {signIn, createUserSession} from '~/utils/session.server';
import {ActionFunction, MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "Inicio de sesión"},
    ];
};

export const action: ActionFunction = async ({request}) => {
    const form = await request.formData();
    const username = form.get('username');
    const password = form.get('password');

    const {jwt, user, error} = await signIn({identifier: username, password});
    console.log(error);
    if (!error) {
        return createUserSession({jwt, user}, '/');
    }
    return null;
}

const Login = () => {

    return (
        <FormLogin/>
    );
}

export default Login;