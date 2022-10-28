import React from 'react';
import styles from "./Menu.module.sass";

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
        src: "/pic1.png",
        text: "Кран шаровой, ручка-бабочка, BP/BP"
    },
    {
        src: "/pic1.png",
        text: "Кран шаровой, ручка-бабочка, BP/HP"
    },
    {
        src: "/pic1.png",
        text: "Кран шаровой, ручка-бабочка, HP/HP"
    },
    {
        src: "/pic1.png",
        text: "Кран шаровой с американкой, ручка-рычаг, BP/HP"
    },
    {
        src: "/pic2.png",
        text: "Кран шаровой, ручка-рычаг, BP/BP"
    },
    {
        src: "/pic2.png",
        text: "Кран шаровой, ручка-рычаг, BH/HP"
    },
    {
        src: "/pic2.png",
        text: "Кран шаровой, ручка-рычаг, HP/HP"
    },
    {
        src: "/pic2.png",
        text: "Кран шаровой с американкой, ручка-бабочка, BP/BP"
    }
];

const navItems = [
    {
        src: "/arm1.png",
        text: "Запорная арматура для воды"
    },
    {
        src: "/arm2.png",
        text: "Запорная арматура для газа"
    },
    {
        src: "/arm1.png",
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