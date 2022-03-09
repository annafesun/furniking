import React from 'react';
//styles
import styles from './index.module.scss'
//icons
import tag from 'assets/icons/tagIco.svg'

type Props = {
    text: string;
}


const Tag: React.FC<Props> = ({
                                  text = 'Furniture',
                              }) => {
    return (
        <span className={styles.tag}>
            <img className={styles.img} src={tag} alt='#' />
            <p className={styles.text}>{text}</p>
        </span>
    );
};

export default Tag;