import React from 'react';
//styles
import styles from "./index.module.scss";

type Props = {
    img: string;
    title: string;
    subTitle: string;
}

const Benefit: React.FC<Props> = ({
                                      img,
                                      title,
                                      subTitle,
                                  }) => {
    return (
        <div className={styles.benefit}>
            <div className={styles.inner}>
                <img className={styles.img} src={img} alt='' />
                <div className={styles.text}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subTitle}>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Benefit;