import React from 'react';
//images
import Icon from "../../atoms/Icon";
import {ShopIcon, ViewIcon, CompareIcon} from "../../../../assets/icons";
//styles
import styles from './styles.module.scss'
import cn from "classnames";
//components
import GoodStatus from "../../atoms/GoodStatus";
//types
import {GoodStatusColor} from "../../../../store/goods/types";


type Props = {
    img: string;
    statusColor: GoodStatusColor;
    statusText: string;
    className?: string;
}

const PhotoGoods: React.FC<Props> = ({
                                         img,
                                         className,
                                         statusColor,
                                         statusText
                                     }) => {
    return (
        <div
            className={cn(
                styles.photoGoods,
                className,
            )}
        >
            <GoodStatus color={statusColor} text={statusText} />
            <img src={img} alt='' />
            <span className={styles.mask} />
            <ul className={styles.buttonList}>
                <li>
                    <Icon />
                </li>
                <li>
                    <Icon icoSrc={ShopIcon} />
                </li>
                <li>
                    <Icon icoSrc={CompareIcon} />
                </li>
                <li>
                    <Icon icoSrc={ViewIcon} />
                </li>
            </ul>
        </div>
    );
};

export default PhotoGoods;