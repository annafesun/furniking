import React from 'react';
//icons
import {HeartIcon} from "assets/icons";
//styles
import styles from './styles.module.scss'
import cn from "classnames";

type Props = {
    icoSrc?: string;
} & React.HTMLProps<HTMLAnchorElement>

const Icon: React.FC<Props> = ({href = '', icoSrc = HeartIcon, className}) => {
    return (
        <a href={href} className={cn(styles.wrapper, className)}>
            <img className={styles.icon} src={icoSrc} alt='' />
        </a>
    );
};

export default Icon;