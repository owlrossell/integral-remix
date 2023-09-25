import {LoaderFunctionArgs, MetaFunction} from "@remix-run/node";
import {getOneCycle} from "~/data/cycleDB.server";
import {isRouteErrorResponse, useLoaderData, useRouteError,} from "@remix-run/react";

import styles from './ciclos.module.css';
import {CycleType} from "~/models/cycle";

export const meta: MetaFunction<typeof loader> = ({data}) => {
    return [
        {title: data?.name || 'Ciclo no encontrado'},
    ];
};

export const loader = async ({params}: LoaderFunctionArgs) => {
    return getOneCycle(params.url || '');
}

const Ciclos = () => {
    const cycle: CycleType = useLoaderData();

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <img src={cycle.coverImage} alt=""/>
            </div>
            <div className={styles.basicInfo}>
                <div className={`container ${styles.info}`}>
                    <h1>{cycle.name}</h1>
                    <p><strong>Inicia: </strong>{cycle.startDate}</p>
                    <p><strong>Finaliza: </strong>{cycle.endDate}</p>
                    <p>{cycle.shortDescription}</p>
                </div>

                <div className={`container ${styles.video}`}>
                    <iframe
                        src={cycle.videoUrl}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </div>
            <div className={styles.paymentPlans}>
                <div className={`container ${styles.paymentPlansContainer}`}>
                    <h3>Planes de pago</h3>
                    {
                        cycle.payment_plans?.map(({attributes}, index) => (
                            <div
                                className={`${styles.paymentPlan} ${attributes.detail.length===1 ? styles.paymentPlanMain : ''}`}
                                key={index}>
                                <h4>{attributes.name}</h4>
                                <table className={`${styles.paymentPlanTable} ${attributes.detail.length===1 ? styles.paymentPlanTableMain : ''}`}>
                                    <thead>
                                    <tr>
                                        <th>Monto</th>
                                        <th>Hasta</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {attributes.detail.map((detail, index) => {
                                        return (
                                            <tr>
                                                <td>{detail.amount}</td>
                                                {detail.expirationDate ? (
                                                    <td>{new Date(detail.expirationDate).toLocaleDateString('es-ES', {
                                                        weekday: "short",
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}</td>
                                                ) : (
                                                    <td>El momento de tu inscripción</td>
                                                )}
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export const ErrorBoundary = () => {
    const error = useRouteError();
    console.log(error, 'UserRoute');
    if (isRouteErrorResponse(error)) {
        return (
            <div className={styles.container}>
                <h1>{error.status}</h1>
            </div>
        )
    } else if (error instanceof Error) {
        return (
            <div className={styles.container}>
                <h1>Error</h1>
                <p>{error.message}</p>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

export default Ciclos;