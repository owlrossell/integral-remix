import type {MetaFunction} from "@remix-run/node";
import Hero from "~/components/hero/Hero";
import Tabs from "~/components/tabs/Tabs";
import tabsItems from "~/data/static/tabsItems";

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <>
            <Hero/>
            <Tabs
            title='¿Porque elegirnos?'
                tabsItems={tabsItems}
            />
        </>
    );
}
