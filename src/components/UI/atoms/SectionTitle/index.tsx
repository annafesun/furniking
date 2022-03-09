import React from 'react';
//styles
import styles from './styles.module.scss'

type Props = {
    text?: string,
}

const SectionTitle: React.FC<Props> = ({
                                           text = 'Trending',
                                       }) => {
    return (
        <span className={styles.sectionTitle}>
            {text}
        </span>
    );
};

export default SectionTitle;