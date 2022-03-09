import React from 'react';
//components
import Benefit from "../../moleculs/Benefit";
//hooks
import {useAppSelector} from "../../../../store/hooks";
//styles
import styles from './index.module.scss'
import shared from "../../../../styles/shared.module.scss";

const Benefits = () => {
    const {benefits} = useAppSelector(({benefitsReducers}) => benefitsReducers)

    return (
        <div className={shared.section}>
            <div className={shared.containerFluid}>
                <div className={styles.benefits}>
                    {benefits?.map(benefit => (
                        <div
                            key={benefit.title}
                            className={styles.benefit}
                        >
                            <Benefit  {...benefit} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;