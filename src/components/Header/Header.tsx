import React from 'react';
import styles from "./Header.module.sass"
import {CONTACTS} from "../../utils/constants";
import logo from "../../../public/log.png";

const Header = (): JSX.Element => {
    const underline = (
        <svg height="10" width="40" className={styles.underline}>
            <line x1="0" y1="10" x2="200" y2="10" />
            Sorry, your browser does not support inline SVG.
        </svg>
    )

    return (
        <header>
            <nav className={styles.header}>
                <img src={logo} alt="logo"/>

                <div className={styles.header__contacts}>
                    <p className={styles.header__phone}>{CONTACTS.tel}</p>
                    <p className={styles.header__email}>{CONTACTS.email}</p>
                </div>
            </nav>
            <div className={styles.navbar__container}>
                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <a>Ассортимент</a>
                            {underline}
                        </li>
                        <li><a>Приемущества</a></li>
                        <li><a>Производство</a></li>
                        <li><a>Сотредничество</a></li>
                        <li><a>Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;