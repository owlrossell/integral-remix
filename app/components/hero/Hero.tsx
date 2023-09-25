import styles from './hero.module.css';
import {FunctionComponent, useEffect, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {heroItemType} from "~/data/static/heroItem";
import ReactMarkdown from "react-markdown";

const Hero: FunctionComponent<{
    heroItem: heroItemType,
}> = ({
          heroItem,
      }) => {
    const successImages = heroItem.successImages;
    const [nowIndex, setNowIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setNowIndex((prevIndex) => (prevIndex + 1) % successImages.length);
        }, 10000);

        return () => {
            clearInterval(intervalId);
        }
    }, [successImages])

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
                                src={successImages[nowIndex]}
                                alt={'Éxito Integral'}
                            />
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <ReactMarkdown
                    className={styles.heroInfo}
                    children={heroItem.content}
                />
            </div>
        </main>
    );
}

export default Hero;