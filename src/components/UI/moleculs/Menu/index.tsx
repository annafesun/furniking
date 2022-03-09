import React from 'react';
//styles
import styles from './index.module.scss'

const Menu = () => {
    return (
        <menu className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <a href=''>Home</a>
                </li>
                <li className={styles.listItem}>
                    <a href=''>Shop</a>
                </li>
                <li className={styles.listItem}>
                    <a href=''>Blog</a>
                </li>
                <li className={styles.listItem}>
                    <a href=''>About</a>
                </li>
                <li className={styles.listItem}>
                    <a href=''>Contact Us</a>
                </li>
            </ul>
        </menu>
    );
};

export default Menu;