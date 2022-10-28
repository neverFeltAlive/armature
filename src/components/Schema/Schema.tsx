import React, {useState} from 'react';
import styles from "./Schema.module.sass";

const details = [
    {
        src: "/material.png",
        text: "Изготовлена из латунного сплава ЛС59-1",
        title: "Высокое качество материалов",
    },
    {
        src: "/material.png",
        text: "Гарантированное высокое качетсов",
        title: "Высокие стандарты",
    },
    {
        src: "/material.png",
        text: "Изготовлена из латунного сплава ЛС59-1",
        title: "Высокое качество материалов",
    },
    {
        src: "/material.png",
        text: "Все изделия соответствуют гос требованиям",
        title: "Соответствие ГОСТ",
    },
    {
        src: "/material.png",
        text: "Гарантия до 7 лет на все изделия",
        title: "Гарантия",
    },
]
const Schema = (): JSX.Element => {
    const [active, setActive] = useState<number>(0);

    const handleActivation = (num: number) => {
        if (active === num) setActive(0);
        else setActive(num);
    }
    return (
        <section className={styles.schema}>
            <h2>Запорная арматура VALFEX</h2>
            <div className={styles.body}>
                <div className={styles.opener}>
                    <img src="/opener.png" alt="photo"/>
                    <div
                        className={active === 1 ? styles.dot + " " + styles.active : styles.dot}
                        style={{
                            top: "40%",
                            left: "50%",
                        }}
                        onClick={() => handleActivation(1)}
                    >
                        <p className={styles.dot__text}>1</p>
                        <p className={styles.dot__description}
                           style={active === 1 ? {display: "block"} : {display: "none"}}>{details[active].title}</p>
                    </div>
                    <div
                        className={active === 2 ? styles.dot + " " + styles.active : styles.dot}
                        style={{
                            top: "60%",
                            left: "85%",
                        }}
                        onClick={() => handleActivation(2)}
                    >
                        <p className={styles.dot__text}>2</p>
                        <p className={styles.dot__description}
                           style={active === 2 ? {display: "block"} : {display: "none"}}>{details[active].title}</p>
                    </div>
                    <div
                        className={active === 3 ? styles.dot + " " + styles.active : styles.dot}
                        style={{
                            top: "48%",
                            left: "5%",
                        }}
                        onClick={() => handleActivation(3)}
                    >
                        <p className={styles.dot__text}>3</p>
                        <p className={styles.dot__description}
                           style={active === 3 ? {display: "block"} : {display: "none"}}>{details[active].title}</p>
                    </div>
                    <div
                        className={active === 4 ? styles.dot + " " + styles.active : styles.dot}
                        style={{
                            top: "68%",
                            left: "40%",
                        }}
                        onClick={() => handleActivation(4)}
                    >
                        <p className={styles.dot__text}>4</p>
                        <p className={styles.dot__description}
                           style={active === 4 ? {display: "block"} : {display: "none"}}>{details[active].title}</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.info__details}>
                        {active !== 0 && (
                            <>
                                <img src={details[active].src} alt="picture"/>
                                <div>
                                    <p>{details[active].text}</p>
                                    <button>Посмотреть в каталоге</button>
                                </div>
                            </>
                        )}
                    </div>
                    <div className={styles.info__text}>
                        <p>
                            Производство изделий осуществляется по утвержденным чертежам на современном производстве в
                            соответствии с утвержденным технологическим регламентом. Закладные детали имеют требную
                            циллиндрическою резьбу согласно ГОСТ 6357-81, класс точности <q>B</q>
                        </p>
                        <p>
                            Все изделия изготавливаются из латунного сплава ЛС59-1 (ГОСТ 15527-2004) методом горячеобъемной
                            штамповки с последующим гальваническим покрытием изделий никилем, а шаровые затворы имеют
                            покрытие никель/хром блетсящий.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schema;