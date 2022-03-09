import React from 'react';
//styles
import styles from './index.module.scss'
//components
import Price from "../../atoms/Price";
import Button from "../../atoms/Button";
//images
import imgBgc from "../../../../assets/images/offerBg.png";


type Props = {
    imgBG: string,
    oldPrice?: number;
    newPrice?: number;
} & React.HTMLAttributes<HTMLDivElement>

const Offer: React.FC<Props> = ({
                                    imgBG = 'imgBgc',
                                    oldPrice = 300,
                                    newPrice = 100,
                                }) => {
    return (
        <div className={styles.offer} style={{backgroundImage: `url(${imgBG})`}}>
            <p className={styles.title}>Living Room Furniture</p>
            <p className={styles.text}>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</p>
            <div className={styles.priceAndButtons}>
                <Price oldPrice={oldPrice} newPrice={newPrice} />
                <Button />
            </div>
            <ul className={styles.timeList}>
                <li className={styles.timeListItem}>
                    <p className={styles.number}>10</p>
                    <p className={styles.textTime}>days</p>
                </li>
                <li className={styles.timeListItem}>
                    <p className={styles.number}>15</p>
                    <p className={styles.textTime}>hrs</p>
                </li>
                <li className={styles.timeListItem}>
                    <p className={styles.number}>30</p>
                    <p className={styles.textTime}>min</p>
                </li>
                <li className={styles.timeListItem}>
                    <p className={styles.number}>22</p>
                    <p className={styles.textTime}>secs</p>
                </li>
            </ul>
        </div>
    );
};

export default Offer;