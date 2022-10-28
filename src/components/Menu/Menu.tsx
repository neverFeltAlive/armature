import React from 'react';
import styles from "./Menu.module.sass";
import picOne from "../../static/images/pic1.png";
import picTwo from "../../static/images/pic2.png";
import armOne from "../../static/images/arm1.png";
import armTwo from "../../static/images/arm2.png";
import armThree from "../../static/images/arm3.png";
//region Types
type MenuNavItemProps = {
    src: string
    text: string
    alt?: string
    className?: string
}

type MenuNavProps = {
    items: MenuNavItemProps[]
}

type MenuItemProps = {
    src: string,
    text: string,
    alt?: string
}
//endregion

//region Data
const menuItems = [
    {
        src: picOne,
        text: "Кран шаровой, ручка-бабочка, BP/BP"
    },
    {
        src: picOne,
        text: "Кран шаровой, ручка-бабочка, BP/HP"
    },
    {
        src: picOne,
        text: "Кран шаровой, ручка-бабочка, HP/HP"
    },
    {
        src: picOne,
        text: "Кран шаровой с американкой, ручка-рычаг, BP/HP"
    },
    {
        src: picTwo,
        text: "Кран шаровой, ручка-рычаг, BP/BP"
    },
    {
        src: picTwo,
        text: "Кран шаровой, ручка-рычаг, BH/HP"
    },
    {
        src: picTwo,
        text: "Кран шаровой, ручка-рычаг, HP/HP"
    },
    {
        src: picTwo,
        text: "Кран шаровой с американкой, ручка-бабочка, BP/BP"
    }
];

const navItems = [
    {
        src: armOne,
        text: "Запорная арматура для воды"
    },
    {
        src: armTwo,
        text: "Запорная арматура для газа"
    },
    {
        src: armThree,
        text: "Закладные детали и компл."
    },
]
//endregion

const Menu = (): JSX.Element => {
    return (
        <section className={styles.menu}>
            <MenuNav items={navItems}/>
            <div className={styles.menu__body}>
                {menuItems.map((item, index) =>
                    <MenuItem key={index} {...item}/>
                )}
            </div>
        </section>
    );
};

export const MenuNav = (props: MenuNavProps): JSX.Element => {
    return (
        <nav className={styles.nav}>
            {props.items.map((item, index) => {
                let {className, ...itemProps} = item;

                if (index === 0) className += " " + styles.left + " " + styles.selected
                if (index === props.items.length - 1) className += " " + styles.right

                return (
                    <MenuNavItem className={className} key={index} {...itemProps}/>
                );
            })}
        </nav>
    )
}

export const MenuNavItem = (props: MenuNavItemProps): JSX.Element => {
    return (
        <div className={styles.nav__item + " " + props?.className}>
            <img src={props.src} alt={props?.alt}/>
            <h3>{props.text}</h3>
        </div>
    )
}

export const MenuItem = (props: MenuItemProps): JSX.Element => {
    return (
        <div className={styles.menu__item}>
            <img src={props.src} alt={props?.alt}/>
            <h6>{props.text}</h6>
        </div>
    );
}

export default Menu;