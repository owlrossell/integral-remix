import type {FunctionComponent} from "react";
import {useContext, useRef, useState} from "react";

import {CSSTransition} from 'react-transition-group';

import styles from './lateral-menu.module.css';
import MenuItem from "~/components/lateral-menu/menu-item";

import LateralMenuContext from "~/components/lateral-menu/lateralMenuContext";
import {menuItemType} from "~/data/static/menuItems";

const LateralMenu: FunctionComponent<{
    isLateralMenuActive: boolean,
    onBackLateralMenu?: () => void,
    onCloseLateralMenu?: () => void,
    title: string,
    isDropDown: boolean,
    menuItems: menuItemType[],
    icon?: string,
}> = ({
          isLateralMenuActive,
          onBackLateralMenu,
          onCloseLateralMenu,
          title,
          isDropDown,
          menuItems,
          icon
      }) => {
    const lateralMenuRef = useRef(null);

    const [selectedMenuItem, setSelectedMenuItem] = useState(-1);

    const [onCloseByContext] = useContext(LateralMenuContext);
    onCloseLateralMenu = onCloseLateralMenu || onCloseByContext;

    const onUpdateSelectedMenu = (menuNumber: number) => {
        setSelectedMenuItem(menuNumber === selectedMenuItem ? -1 : menuNumber)
    }

    return (

        <CSSTransition
            in={isLateralMenuActive}
            classNames='left'
            nodeRef={lateralMenuRef}
            timeout={300}
            unmountOnExit
        >
            <LateralMenuContext.Provider value={onCloseLateralMenu ? [onCloseLateralMenu] : []}>
                {!onBackLateralMenu && <div className={styles.layer} onClick={onCloseLateralMenu}></div>}
                <div
                    className={styles.lateralMenu}
                    ref={lateralMenuRef}
                >
                    <div className={`container ${styles.container}`}>
                        <header className={styles.header}>
                            {icon ? (
                                <img src={icon} alt="Ícono de la academia"/>
                            ) : (
                                <button className='iconButton' onClick={onBackLateralMenu}>
                                    <i className="fa-solid fa-chevron-left"/>
                                </button>
                            )}
                            <p>{title}</p>
                            <button className='iconButton' onClick={onCloseLateralMenu}>
                                <i className="fa-solid fa-xmark"/>
                            </button>
                        </header>
                        <ul className={styles.listMenuItems}>
                            {
                                menuItems.map((menuItem, index) => (
                                    <MenuItem
                                        key={index}
                                        isDropDown={isDropDown}
                                        menuItem={menuItem}
                                        menuNumber={index}
                                        selectedMenuItem={selectedMenuItem}
                                        onUpdateSelectedMenu={onUpdateSelectedMenu}
                                    />
                                ))
                            }
                            <form className={`whitespace-nowrap`} action='/sign-out' method='POST'>
                                <button>Cerrar sesión</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </LateralMenuContext.Provider>
        </CSSTransition>

    );
}

export default LateralMenu;