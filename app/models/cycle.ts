export interface CycleType {
    id: number,
    name: string,
    startDate: string,
    endDate: string,
    shortDescription: string,
    url: string,
    videoUrl: string,
    coverImage: string,
    payment_plans?: Object[],
}

export const toArrayCyclesFormat = (data: Array<Object>): CycleType[] => {
    return data.map((element, index) => {
        return {
            id: element.id,
            name: element.attributes.name,
            startDate: new Date(element.attributes.startDate).toLocaleDateString('es-ES', {
                weekday: "short",
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            endDate: new Date(element.attributes.endDate).toLocaleDateString('es-ES', {
                weekday: "short",
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            shortDescription: element.attributes.shortDescription,
            url: element.attributes.url,
            videoUrl: element.attributes.videoUrl,
            coverImage: element.attributes.coverImage.data.attributes.formats.medium.url,
        }
    })
}

export const toCyclesFormat = (data: Array<Object>): CycleType => {
    return {
        id: data[0].id,
        name: data[0].attributes.name,
        startDate: new Date(data[0].attributes.startDate).toLocaleDateString('es-ES', {
            weekday: "short",
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        endDate: new Date(data[0].attributes.endDate).toLocaleDateString('es-ES', {
            weekday: "short",
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        shortDescription: data[0].attributes.shortDescription,
        url: data[0].attributes.url,
        videoUrl: data[0].attributes.videoUrl,
        coverImage: data[0].attributes.coverImage.data.attributes.formats.large.url,
        payment_plans: data[0].attributes.payment_plans.data,
    };
}