import React from 'react';
//styles
import styles from './styles.module.scss'

type Props = {
    newPrice?: number,
    oldPrice?: number,
}

const Price: React.FC<Props> = ({
                                    newPrice = 100,
                                    oldPrice = 120,
                                }) => {
    return (
        <div className={styles.price}>
            <div className={styles.newPrice}>{newPrice}$</div>
            <div className={styles.oldPrice}>{oldPrice}$</div>
        </div>
    );
};

export default Price;