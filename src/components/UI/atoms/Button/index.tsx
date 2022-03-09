import React from 'react';
//styles
import styles from './index.module.scss'
import cn from "classnames";

type  Props = {
    buttonText?: string;
    leftMargin?: boolean
} & React.HTMLProps<HTMLAnchorElement>

const Button: React.FC<Props> = ({
                                     buttonText = 'Shop now',
                                     leftMargin = true,
                                     className
                                 }) => {
    return (
        <a
            className={cn(
                styles.shopNow,
                {
                    [styles.leftMargin]: leftMargin
                },
                className
            )}
            href='#'
        >{buttonText}</a>
    );
};

export default Button;