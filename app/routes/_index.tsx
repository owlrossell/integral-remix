import type {MetaFunction} from "@remix-run/node";
import Hero from "~/components/hero/Hero";
import Tabs from "~/components/tabs/Tabs";
import tabsItems from "~/data/static/tabsItems";
import heroItem from "~/data/static/heroItem";
import CarouselInfo from "~/components/carousel-info/CarouselInfo";
import {getAllCycles} from "~/data/cycleDB.server";

export const meta: MetaFunction = () => {
    return [
        {title: "Academia Integral"},
        {name: "description", content: "La mejor propuesta educativa de Huaraz"},
    ];
};

export const loader = async () =>{
    return await getAllCycles();
}

export default function Index() {
    return (
        <>
            <Hero heroItem={heroItem}/>
            <Tabs
                title='¿Porque elegirnos?'
                tabsItems={tabsItems}
            />
            <CarouselInfo title='Nuestros Ciclos'/>
        </>
    );
}
