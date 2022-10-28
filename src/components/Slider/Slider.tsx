import React, {useState} from 'react';
import styles from "./Slider.module.sass";
import pic from "../../../public/pic3.png";

const images = [
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
]

const Slider = (): JSX.Element => {
    const [current, setCurrent] = useState<number>(0);

    return (
        <section className={styles.slider}>
            <div className={styles.headers}>
                <h2>Арматурный завод <q>VALFEX</q></h2>
                <h3>Современный российский завод по производству изделий из латунных сплавов</h3>
            </div>

            <img src={images[current]} alt="image"/>

            <svg height="70" width="100" className={styles.triangle}>
                <polygon points="50,20 0,100 100,100"/>
            </svg>

            <div className={styles.menu}>
                {images.map((image, index) => {
                    return (
                        <img key={index} className={index === current ? styles.current : ""} src={image} alt="image"
                             onClick={(e) => setCurrent(index)}/>
                    )
                })}
            </div>
        </section>
    );
};

export default Slider;