import {logout} from "../utils/session.server";
import {ActionFunction, redirect} from "@remix-run/node";

export const action:ActionFunction = ({request}) => {
    return logout(request);
}

export const loader = () => {
    return redirect('/');
}