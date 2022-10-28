import React from 'react';
import styles from "./Footer.module.sass";

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footer__nav}>
                <a href="/programming/web/armature/public">История завода</a>
                <a href="/programming/web/armature/public">Производство</a>
                <a href="/programming/web/armature/public">Каталог</a>
                <a href="/programming/web/armature/public">Сотрудничество</a>
                <a href="/programming/web/armature/public">Техподдержка</a>
                <a href="/programming/web/armature/public">Клиентам</a>
                <a href="/programming/web/armature/public">Контакты</a>
            </nav>

            <div className={styles.footer__info}>
                <img src="/public/log2.png" alt="logo"/>
                <p>
                    &#169; 2017-2019 Арматурный завод <q>VALFEX</q> - высокатехнологичный российский завод по
                    производству изделий из латунных сплавов
                </p>
            </div>
        </footer>
    );
};

export default Footer;