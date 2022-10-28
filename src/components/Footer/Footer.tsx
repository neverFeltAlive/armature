import React from 'react';
import styles from "./Footer.module.sass";
import logo from "../../static/images/log2.png";

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footer__nav}>
                <a href="/">История завода</a>
                <a href="/">Производство</a>
                <a href="/">Каталог</a>
                <a href="/">Сотрудничество</a>
                <a href="/">Техподдержка</a>
                <a href="/">Клиентам</a>
                <a href="/">Контакты</a>
            </nav>

            <div className={styles.footer__info}>
                <img src={logo} alt="logo"/>
                <p>
                    &#169; 2017-2019 Арматурный завод <q>VALFEX</q> - высокатехнологичный российский завод по
                    производству изделий из латунных сплавов
                </p>
            </div>
        </footer>
    );
};

export default Footer;