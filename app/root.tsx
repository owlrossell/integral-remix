import {cssBundleHref} from "@remix-run/css-bundle";
import type {LinksFunction, LoaderFunction} from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import global from '~/styles/global.css';
import animate from '~/styles/animate.css';
import styles from '~/styles/root.module.css';
import Header from "~/components/header";
import {useState} from "react";
import {getUserDate} from "~/utils/session.server";
import {getOneUser} from "~/utils/user.server";
import {json} from "@remix-run/node";

export const loader:LoaderFunction = async ({request}) => {
    const userData = await getUserDate(request);
    const user = await getOneUser(userData?.user.id);

    const isLogged = !!userData?.user;
    const userImage = user?.profileImage.formats.thumbnail.url;
    const userName = userData?.user.username;
    return json({
        isLogged,
        userImage,
        userName,
    })
}

export const links: LinksFunction = () => [
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Outfit:wght@400;700;900&display=swap',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        integrity: 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==',
        crossOrigin: 'anonymous',
        referrerPolicy: 'no-referrer',
    },
    {rel: 'stylesheet', href: global},
    {rel: 'stylesheet', href: animate},
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []),
];

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLateralMenuActive, setIsLateralMenuActive] = useState(false);
    return (
        <html
            className={isDarkMode ? styles.darkTheme : styles.lightTheme}
            lang="es"
        >
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className={`${styles.body} ${isLateralMenuActive? styles.overFlowHidden : styles.overFlowAuto}`}>
        <Header
            isDarkMode={isDarkMode}
            isLateralMenuActive={isLateralMenuActive}
            setIsLateralMenuActive={setIsLateralMenuActive}
        />
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
