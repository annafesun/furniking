import React from 'react';
//styles
import styles from './styles.module.scss'
import cn from 'classnames'
//components
import PhotoGoods from "../PhotoGoods";
import TypeGoods from "../../atoms/TypeGoods";
import Price from "../../atoms/Price";
//images
import ratings from 'assets/icons/ratingsGood.png'
//types
import {GoodStatusColor} from "../../../../store/goods/types";

type Props = {
    img: string;
    statusColor: GoodStatusColor;
    statusText: string;
    type?: 'chair' | 'sofa';
    oldPrice?: string;
    newPrice?: string;
} & React.HTMLProps<HTMLDivElement>

export const Good: React.FC<Props> = ({
                                          className,
                                          type = 'chair',
                                          img,
                                          statusColor,
                                          statusText,
                                      }) => {
    return (
        <div className={cn(styles.good, className)}>
            <PhotoGoods statusColor={statusColor} statusText={statusText} img={img} />
            <TypeGoods type={type} />
            <p className={styles.title}>Minimal LCD chair</p>
            <div className={styles.blockPriceRatings}>
                <Price />
                <img className={styles.ratings} src={ratings} alt='' />
            </div>
        </div>
    );
};
