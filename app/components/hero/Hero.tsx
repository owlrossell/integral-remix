import styles from './hero.module.css';
import successStories from "~/data/static/successStories";
import {useEffect, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const Hero = () => {
    const images = successStories;
    const [nowIndex, setNowIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setNowIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => {
            clearInterval(intervalId);
        }
    }, [images])

    return (
        <main className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={nowIndex}
                        classNames="fade"
                        timeout={200}
                    >
                        <div className={styles.heroImage}>
                            <img
                                src={images[nowIndex].image}
                                alt={'Éxito Integral'}
                            />
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className={styles.heroInfo}>
                    <h1>¡Logremos <span>juntos</span> tu ingreso!</h1>
                    <p>"Somos expertos en preparación preuniversitaria, con 28 años de experiencia"</p>
                </div>
            </div>
        </main>
    );
}

export default Hero;