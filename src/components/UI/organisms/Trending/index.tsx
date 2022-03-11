import React, {MouseEvent, useEffect, useState} from 'react';
import cn from 'classnames'
//hooks
import {useGoods} from "./hooks/useGoods";
//components
import SectionTitle from "../../atoms/SectionTitle";
import {Good} from "../../moleculs/Good";
//styles
import styles from './styles.module.scss'
import shared from 'styles/shared.module.scss'

const Trending = () => {
    const {
        pages,
        currentPage,
        handleChangePage,
        goods
    } = useGoods()

    return (
        <div className={shared.section}>
            <div className={shared.containerFluid}>
                <SectionTitle text='Trending' />
                <ul className={styles.list}>
                    {pages.map(({key, label}) => (
                        <li
                            className={cn(
                                styles.listButton,
                                {[styles.active]: key === currentPage}
                            )}
                            key={key}
                        >
                            <a
                                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault()
                                    handleChangePage(key)
                                }} href=''
                            >{label}</a>
                        </li>
                    ))}
                </ul>
                <div className={styles.goods}>
                    {goods?.map((good, i) => (
                        <Good
                            key={good.img + i}
                            className={styles.good}
                            {...good}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trending;