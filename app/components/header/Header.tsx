import styles from "./header.module.css";
import logoLight from '~/../public/images/svg/academy-light.svg';
import logoDark from '~/../public/images/svg/academy-dark.svg';
import icon from '~/../public/images/svg/icon-academy-light.svg';

import type {FunctionComponent} from "react";
import {Link} from "@remix-run/react";
import {useState} from "react";
import LateralMenu from "~/components/lateral-menu/LateralMenu";
import menuItems from "~/data/static/menuItems";

const Header: FunctionComponent<{ isDarkMode: boolean }> = ({isDarkMode}) => {
    const [isLateralMenuActive, setIsLateralMenuActive] = useState(false);

    const onButtonMenuClick = () => {
        setIsLateralMenuActive(true);
    }

    const onCloseLateralMenu = () => {
        setIsLateralMenuActive(false);
    }
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link to={'/'}>
                    <img
                        className={styles.headerLogo}
                        src={isDarkMode ? logoDark : logoLight}
                        alt='Logo de la Academia Integral'
                    />
                </Link>
                <button className={'iconButton'} onClick={onButtonMenuClick}>
                    <i className="fa-solid fa-bars"/>
                </button>
            </div>
            <LateralMenu
                isLateralMenuActive={isLateralMenuActive}
                onCloseLateralMenu={onCloseLateralMenu}
                title='Menú Principal'
                isDropDown
                menuItems={menuItems}
                icon={icon}
            />
        </header>
    );
}

export default Header;