import React from 'react';
import styles from "./About.module.sass";

//region Type
type FeatureProps = {
    text: string
}

type IconFeatureProps = FeatureProps & {
    src: string
    alt?: string
}

type TextFeatureProps = FeatureProps & {
    title: string | JSX.Element
}
//endregion

//region Data
const iconFeatures = [
    {
        src: "/1.png",
        text: "Лидер на рынке запорной арматуры",
    },
    {
        src: "truck.png",
        text: "Удобное логистическое расположение",
    },
    {
        src: "global.png",
        text: "Широкая география продаж",
    },
]

const textFeatures = [
    {
        title: <>8000 м<sup>2</sup></>,
        text: "производственных помещений"
    },
    {
        title: "230",
        text: "наименований товара"
    },
    {
        title: "50",
        text: "товарных групп"
    },
]
//endregion

const About = (): JSX.Element => {
    return (
        <section className={styles.about}>
            <h2>Завод запорной арматуры TM VALFEX</h2>
            <p>В 2018 годв в г. Вязники, Владимирской области начал свою работу арматурный завод полного цикла <q>VALFEX</q>,
                обеспечив тем самым более 300 рабочих мест.</p>
            <p>Территория завода составляет 8000 м<sup>2</sup> и включает в себя: 4 производственных корпуса, конструкторский
                отдел, участок литья, участок гальванопокрытий, участок механической обработки, участок прессов
                (объемной штамповки), инструментальный участок, участок сборки и упаковки запорной арматуры.</p>
            <p>Завод оснащён современным высокотехнологичным оборудованием, что позволяет решать широкий спектр
                производственных задач.</p>

            <div className={styles.featureBar}>
                {iconFeatures.map((feature, index) =>
                    <IconFeature key={index} {...feature}/>
                )}
                {textFeatures.map((feature, index) =>
                    <TextFeature key={index} {...feature}/>
                )}
            </div>
        </section>
    );
};

export const IconFeature = (props: IconFeatureProps): JSX.Element => {
    return (
        <div className={styles.feature}>
            <img src={props.src} alt={props?.alt}/>
            <p className={styles.feature__text}>{props.text}</p>
        </div>
    )
}

export const TextFeature = (props: TextFeatureProps): JSX.Element => {
    return (
        <div className={styles.feature}>
            <h3 className={styles.feature__title}>{props.title}</h3>
            <p className={styles.feature__text}>{props.text}</p>
        </div>
    )
}

export default About;