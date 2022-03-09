import React from 'react';
//components
import Collection from "../../moleculs/Collection";
//styles
import styles from './index.module.scss'
import shared from "../../../../styles/shared.module.scss";

const Collections = () => {
    return (
        <div className={shared.section}>
            <div className={shared.containerFluid}>
                <div className={styles.collections}>
                    <Collection className={styles.oneCollection} />
                    <div className={styles.twoCollection}>
                        <Collection />
                        <Collection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;