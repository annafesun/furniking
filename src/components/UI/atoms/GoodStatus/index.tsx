import React, {HTMLProps} from 'react';
//styles
import styles from './style.module.scss'
import cn from 'classnames'
//types
import {GoodStatusColor} from "../../../../store/goods/types";

type Props = {
    color?: GoodStatusColor
    text?: string
} & HTMLProps<HTMLSpanElement>

const GoodStatus: React.FC<Props> = ({
                                                color = 'blue',
                                                text = 'New',
                                                className,
                                                ...props
                                            }) => {
    return (
        <span
            className={cn(
                styles.goodStatus,
                styles[color],
                className,
            )}
            {...props}
        >
            {text}
        </span>
    );
};

export default GoodStatus;
