import React from 'react';
//styles
import cn from "classnames";
import styles from "./style.module.scss";

type Props = {
    color?: 'grey'
    type?: 'chair' | 'sofa'
} & React.HTMLProps<HTMLSpanElement>


const TypeGoods: React.FC<Props> = ({
                                        color = 'grey',
                                        type = 'chair',
                                        className,
                                    }) => {
    return (
        <span
            className={cn(
                styles.typeGoods,
                styles[color],
                className,
            )}
        >
            {type}
        </span>
    );
};

export default TypeGoods;