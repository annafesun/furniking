import React from 'react';
//components
import Tag from "../../atoms/Tag";
import ButtonReadMore from "../../atoms/LinkButton";
//styles
import styles from './index.module.scss'
import cn from 'classnames'

type Props = {
    img: string;
    date?: string;
    title?: string;
    text: string;
} & React.HTMLAttributes<HTMLDivElement>

const Blog: React.FC<Props> = ({
                                   img,
                                   date = '23 September 2022',
                                   title = 'Beginner guide buying minimal sofa',
                                   text,
                                   className
                               }) => {
    return (
        <div
            className={cn(
                styles.blog,
                className)}
            style={{backgroundImage: `url(${img})`}}
        >
            <div className={styles.tagDate}>
                <Tag text={text} />
                <p className={styles.date}>{date}</p>
            </div>
            <p className={styles.title}>{title}</p>
            <ButtonReadMore className={styles.buttons} />
        </div>
    );
};

export default Blog;