import React from 'react';
//styles
import styles from './index.module.scss'
//images
import avatar from 'assets/images/avatar.png'

type Props = {
    img: string;
    content?: string;
    author?: string;
    jobPosition?: string;
}

const Testimonial: React.FC<Props> = ({
                                          img = avatar,
                                          content = `Hello`,
                                          author = 'Angelina Joly',
                                          jobPosition = 'Co-founder'
                                      }) => {
    return (
        <div className={styles.testimonial}>
            <img className={styles.img} src={img} alt='' />
            <p className={styles.content}>{content}</p>
            <p className={styles.author}>{author}</p>
            <p className={styles.jobPosition}>{jobPosition}</p>
        </div>
    );
};

export default Testimonial;
