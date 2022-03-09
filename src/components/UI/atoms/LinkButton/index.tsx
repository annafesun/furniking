import React from 'react';
//styles
import styles from './index.module.scss'
import cn from 'classnames'
//images
import arrow from 'assets/icons/arrow.svg'

type Props = {
    withArrow?: boolean;
} & React.HTMLProps<HTMLAnchorElement>

const ButtonReadMore: React.FC<Props> = ({
                                             withArrow = false,
                                             className,
                                         }) => {
    return (
        <div className={styles.total}>
            <a
                href='#'
                className={cn(
                    styles.button,
                    className,
                )}
            >
                Read More {withArrow && <img src={arrow} className={styles.arrow} alt='' />}
            </a>
        </div>
    );
};

export default ButtonReadMore;