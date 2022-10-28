import React from 'react';
import styles from "./Conditions.module.sass";

const listItems = [
    "индивидуальный подход к каждому клиенты;",
    "регулярные тематические скминары по продукции;",
    "гарантия на всю продукцию до 7 лет;",
    "удобный способ расчета - наличный или безналичный;",
    "предоставление всех необходимых сертификатов и разрешений на продукцию;",
    "постоянное наличие на складе широкого асортимента продукции;",
    "маркетинговая и информационная поддержка;",
    "обработка и оформление заказа не более 1 часа;",
    "гибкая система скидок;",
    "участие в текущих акциях;",
]

const Conditions = (): JSX.Element => {
    const line = (
        <svg height="10" width="10" className={styles.line}>
            <line x1="0" y1="10" x2="200" y2="10" />
            Sorry, your browser does not support inline SVG.
        </svg>

    )

    const middleIndex = Math.floor(listItems.length / 2);
    const firstHalf = listItems.slice(0, middleIndex);
    const secondHalf = listItems.slice(middleIndex, listItems.length);

    return (
        <section className={styles.conditions}>
            <h2>Условия сотрудничества</h2>
            <div className={styles.conditions__body}>
                <ul>
                    {firstHalf.map((item, index) => {
                        return (
                            <li key={index} className={styles.item}>{line}<p>{item}</p></li>
                        )
                    })}
                </ul>
                <ul>
                    {secondHalf.map((item, index) => {
                        return (
                            <li key={index} className={styles.item}>{line}<p>{item}</p></li>
                        )
                    })}
                </ul>
            </div>
            <button>Заявка на сотрудничество</button>
        </section>
    );
};

export default Conditions;