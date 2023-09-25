import {CycleType, toArrayCyclesFormat, toCyclesFormat} from "~/models/cycle";

export const getAllCycles = async (): Promise<CycleType[]> => {
    const response: Response = await fetch('http://127.0.0.1:1337/api/cycles?populate=coverImage');
    const {data} = await response.json();
    return toArrayCyclesFormat(data);
}

export const getOneCycle = async (url: string): Promise<CycleType> => {
    const response: Response = await fetch(`http://127.0.0.1:1337/api/cycles?filters[url]=${url}&populate=*`);
    const {data} = await response.json();
    if (data.length === 0)
        throw new Error('Ciclo no encontrado');
    return toCyclesFormat(data);
    // return toCyclesFormat(result.data);
}