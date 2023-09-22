import styles from "./tabs.module.css";
import {FunctionComponent, useState} from "react";
import tabsItem from "~/models/static/tabsItem";
import ReactMarkdown from "react-markdown";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const Tabs: FunctionComponent<{
    title: string,
    tabsItems: tabsItem[]
}> = ({
          title,
          tabsItems
      }) => {

    const [selectedTab, setSelectedTab] = useState(0);

    const onUpdateTab = (tabNumber: number) => {
        console.log(tabNumber);
        setSelectedTab(tabNumber);
    }

    return (
        <section className={`container ${styles.tabs}`}>
                <h2>{title}</h2>
                <div className={styles.tabsOptions}>
                    {tabsItems.map((tabsItem, index) => (
                        <button
                            className={`${styles.tabButton} ${selectedTab === index ? styles.tabButtonActive: ''}`}
                            key={index}
                            onClick={() => onUpdateTab(index)}
                        >
                            {tabsItem.title}
                        </button>
                    ))}
                </div>
                <SwitchTransition mode='out-in'>
                    <CSSTransition
                        timeout={200}
                        key={tabsItems[selectedTab].title}
                        classNames='fade'
                    >
                        <div className={styles.tab}>
                            <div className={styles.tabImage}>
                                <img src={tabsItems[selectedTab].coverImage} alt=""/>
                            </div>
                            <ReactMarkdown className={styles.tabInfo} children={tabsItems[selectedTab].content}/>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
        </section>
    );
}

export default Tabs;