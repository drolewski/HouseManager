import type {MetaFunction} from "@remix-run/cloudflare";
import {json} from "@remix-run/cloudflare";
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData,} from "@remix-run/react";

import styles from "./styles/app.css"
import Navbar from "~/components/navbar/navbar.component";
import {getNavigation} from "~/models/navigation/navigation.server";
import Headbar from "~/components/headbar/headbar.component";

export function links() {
    return [{rel: "stylesheet", href: styles}]
}

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "House Manager",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    return (
        <Document>
            <Layout>
                <Headbar/>
                <Outlet/>
                <ScrollRestoration/>
                <Scripts/>
            </Layout>
        </Document>
    );
}

export const Document = ({children}: any) => {
    return (
        <html lang="en" className="h-full">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body className="bg-stone-100 h-full w-full">
        {children}
        </body>
        </html>
    );
}

export const loader = async () => {
    return json({navigation: await getNavigation()});
};
export const Layout = ({children}: any) => {
    const {navigation} = useLoaderData<typeof loader>();
    return (
        <div className="flex flex-row h-full">
            <Navbar navigation={navigation}/>
            <div className="flex flex-col items-center w-full">
                {children}
            </div>
            {process.env.NODE_ENV === 'development' ? <LiveReload/> : null}
        </div>
    );
}
