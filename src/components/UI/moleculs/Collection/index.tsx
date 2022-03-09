import React from 'react';
//styles
import styles from './index.module.scss'
import cn from 'classnames'
//components
import ButtonReadMore from "../../atoms/LinkButton";
//images
import collection from 'assets/images/collection.png'

type Props = {
    imgCollect?: string;
    title?: string;
    price?: string;
} & React.HTMLProps<HTMLDivElement>

const Collection: React.FC<Props> = ({
                                         className,
                                         title = 'Modern Furniture Collections',
                                         price = 'Starting from $500'
                                     }) => {
    return (
        <div
            className={cn
            (
                styles.collection,
                className
            )}
            style={{backgroundImage: `url(${collection})`}}
        >
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}</p>
            <ButtonReadMore withArrow />
        </div>
    );
};

export default Collection;