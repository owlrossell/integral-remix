interface MenuItemType {
    name: string,
    url?: string,
    menuItems?: MenuItemType[],
    metaInfo?: number,
    isNew?: boolean,
}

export default MenuItemType;