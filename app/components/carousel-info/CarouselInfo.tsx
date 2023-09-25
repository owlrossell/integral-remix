import {FunctionComponent} from "react";
import styles from './carousel-info.module.css';
import {getAllCycles} from "~/data/cycleDB.server";
import {Link, useLoaderData} from "@remix-run/react";
import {CycleType} from "~/models/cycle";

const CarouselInfo: FunctionComponent<{
    title: string,

}> = ({

          title
      }) => {
    const cycles: CycleType[] = useLoaderData();

    return (
        <section className={styles.carouselInfo}>
            <div className={`container ${styles.container}`}>
                <h2>{title}</h2>
                <div className={styles.carousel}>
                    {cycles.map((cycle) => (
                        <div key={cycle.id} className={styles.carouselItem}>
                            <div className={styles.itemImage}>
                                <img
                                    src={cycle.coverImage}
                                    alt=""
                                />
                            </div>
                            <div className={styles.itemInfo}>
                                <h3>{cycle.name}</h3>
                                <p><strong>Inicia: </strong> {cycle.startDate}</p>
                                <p><strong>Finaliza: </strong> {cycle.endDate}</p>
                                <p>
                                    {cycle.shortDescription}
                                </p>
                                <Link to={`/ciclos/${cycle.url}`}>Conocer más</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CarouselInfo;