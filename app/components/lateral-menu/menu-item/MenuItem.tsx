import {Link} from "@remix-run/react";
import newIcon from '~/../public/images/svg/new.svg'

import type {FunctionComponent} from "react";

import styles from './menu-item.module.css';
import MenuDropDown from "~/components/lateral-menu/menu-dropdown";
import LateralMenu from "~/components/lateral-menu/LateralMenu";
import {useContext, useState} from "react";
import {menuItemType} from "~/data/static/menuItems";
import LateralMenuContext from "~/components/lateral-menu/lateralMenuContext";

const MenuItem: FunctionComponent<{
    isDropDown: boolean,
    menuItem: menuItemType,
    selectedMenuItem?: number,
    menuNumber?: number,
    onUpdateSelectedMenu?: (menuNumber: number) => void,
}> = ({
          isDropDown,
          menuItem,
          selectedMenuItem,
          menuNumber,
          onUpdateSelectedMenu,
      }) => {
    const isActive = selectedMenuItem === menuNumber;

    const [onCloseByContext]= useContext(LateralMenuContext);

    const [isNewMenuActive, setIsNewMenuActive] = useState(false);

    const onClickMenuItem = () => {
        if (menuItem.menuItems) {
            setIsNewMenuActive(true);
        }
    }

    if (menuItem.url && !menuItem.metaInfo) {
        // List Item de tipo URL
        return (
            <li className={styles.menuItem}>
                <div className={styles.nameContainer}>
                    <Link to={menuItem.url} onClick={onCloseByContext}>{menuItem.name}</Link>
                    {menuItem.isNew && <img src={newIcon} alt="Icono nuevo"/>}
                </div>
            </li>
        )
    } else if (isDropDown && menuItem.menuItems && onUpdateSelectedMenu && menuNumber !== undefined) {
        return (
            <>
                <li className={`${styles.menuItem} ${styles.justifySpaceBetween} ${styles.pointer} ${isDropDown ? styles.borderDropDown : ''}`}
                    onClick={() => onUpdateSelectedMenu(menuNumber)}>
                    <div className={styles.nameContainer}>
                        <span>{menuItem.name}</span>
                        {menuItem.isNew && <img src={newIcon} alt="Icono nuevo"/>}
                    </div>
                    <i className="fa-solid fa-chevron-down"/>
                </li>
                <MenuDropDown menuItems={menuItem.menuItems} isActive={isActive}/>
            </>
        )
    } else {
        return (
            <>
                <li className={`${styles.menuItem} ${styles.justifySpaceBetween} ${!menuItem.url ? styles.pointer : ''}`}
                    onClick={onClickMenuItem}>

                    {menuItem.url ? (
                        <>
                            <div className={styles.nameContainer}>
                                <Link to={menuItem.url} className={`${styles.menuItem} ${styles.gap}`}>
                                    <div className={styles.nameContainer}>
                                        <span>{menuItem.name}</span>
                                        {menuItem.isNew && <img src={newIcon} alt="Icono nuevo"/>}
                                    </div>
                                    <div className={styles.iconContainer}>
                                        {menuItem.metaInfo ? (
                                            <span>{menuItem.metaInfo}</span>
                                        ) : (
                                            <i className="fa-solid fa-plus"/>
                                        )}
                                    </div>
                                </Link>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className={styles.nameContainer}>
                                <span>{menuItem.name}</span>
                                {menuItem.isNew && <img src={newIcon} alt="Icono nuevo"/>}
                            </div>
                            <div className={styles.iconContainer}>
                                {menuItem.metaInfo ? (
                                    <span>{menuItem.metaInfo}</span>
                                ) : (
                                    <i className="fa-solid fa-plus"/>
                                )}
                            </div>
                        </>
                    )}
                </li>
                {
                    menuItem.menuItems && (
                        <LateralMenu
                            isDropDown={false}
                            menuItems={menuItem.menuItems}
                            isLateralMenuActive={isNewMenuActive}
                            title={menuItem.name}
                            onBackLateralMenu={() => setIsNewMenuActive(false)}
                        />
                    )
                }
            </>

        )
    }
}

export default MenuItem;