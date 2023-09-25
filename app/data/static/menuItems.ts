export interface menuItemType {
    name: string,
    url?: string,
    menuItems?: menuItemType[],
    metaInfo?: number,
    isNew?: boolean,
}


const menuItems:menuItemType[] = [
    {
        name: 'Ciclos presenciales',
        isNew: true,
        menuItems:[
            {
                name: 'Ciclos actuales',
                isNew: true,
                menuItems: [
                    {
                        name: 'ejemplo',
                        isNew: true,
                        metaInfo: 151,
                        menuItems: [
                            {
                                name: 'ejemplo',
                                isNew: true,
                                metaInfo: 151,
                                menuItems: [
                                    {
                                        name: 'ejemplo',
                                        url: '/ejemplo',
                                        metaInfo: 151,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Tipos de ciclo',
                url: '/tipos-ciclo',
            },
            {
                name: 'Nuestros locales',
                url: '/locales'
            }
        ]
    },
    {
        name: 'Recursos gratis',
        menuItems: [
            {
                name: 'Blog',
                url: '/blog',
            },
            {
                name: 'Exámenes',
                url:'/descargables'
            },
            {
                name: 'YouTube',
                url: 'https://www.youtube.com/@devsolution6329',
            }
        ]
    },
    {
        name: 'Ciclos presenciales',
        menuItems: [
            {
                name: 'Ciclo 5TO Pre 2023',
                isNew: true,
                url: '/ciclos/ciclo-5-to-pre-2023',
            },
            {
                name: 'Ciclo Repaso 2023',
                url:'/ciclos/ciclo-repaso-2023'
            },
            {
                name: 'Ciclo Verano 2023',
                url: '/ciclos/ciclo-verano-2023',
            },
        ]
    },
    {
        name: 'Iniciar sesión',
        url: '/login',
    }
]

export default menuItems;