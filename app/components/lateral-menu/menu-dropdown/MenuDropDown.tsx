import {useRef} from "react";
import {CSSTransition} from "react-transition-group";

import type {FunctionComponent} from 'react'

import styles from './menu-dropdown.module.css';
import MenuItem from "~/components/lateral-menu/menu-item";
import {menuItemType} from "~/data/static/menuItems";

const MenuDropDown: FunctionComponent<{
    isActive: boolean,
    menuItems: menuItemType[],
}> = ({
          isActive,
          menuItems,
      }) => {
    const menuDropRef = useRef(null);
    return (
        <CSSTransition
            in={isActive}
            timeout={200}
            nodeRef={menuDropRef}
            classNames='dropdown'
            unmountOnExit
        >
            <ul className={styles.menuDropDown} ref={menuDropRef}>
                {
                    menuItems.map((menuItem, index) => (
                        <MenuItem
                            key={index}
                            isDropDown={false}
                            menuItem={menuItem}
                        />
                    ))
                }
            </ul>
        </CSSTransition>
    );
}

export default MenuDropDown;