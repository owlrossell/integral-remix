import type MenuItemType from "~/models/static/menuItem";


const menuItems:MenuItemType[] = [
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
    }
]

export default menuItems;