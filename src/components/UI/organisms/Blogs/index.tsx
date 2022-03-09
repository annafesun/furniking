import React from 'react';
//components
import Blog from "../../moleculs/Blog";
import SectionTitle from "../../atoms/SectionTitle";
//hooks
import {useAppSelector} from "../../../../store/hooks";
//styles
import styles from './index.module.scss'
import shared from 'styles/shared.module.scss'


const Blogs = () => {
    const {blogs} = useAppSelector(({blogsReducers}) => blogsReducers)

    return (
        <div className={shared.containerFluid}>
            <SectionTitle text={'Our Latest Articles'} />
            <div className={styles.blogs}>
                {blogs?.map((blog, index) => (
                    <div
                        key={blog.img + index}
                        className={styles.blog}
                    >
                        <Blog {...blog} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;