import React from 'react';
//components
import HeaderSearch from "./Header-search";
//styles
import styles from './styles.module.scss'
import shared from 'styles/shared.module.scss'


const Header: React.FC<{}> = () => {
    return (
        <header className={styles.header}>
            <section className={styles.topBar}>
                <div className={shared.containerFluid}>
                    <div className={styles.topBarInner}>
                        <p className={styles.welcome}>Welcome to our online shop</p>
                        <div className={styles.language}>
                            <select>
                                <option>English(USD)</option>
                                <option>Українська(UAN)</option>
                            </select>
                            <span>|</span>
                            <a href='#'>Login or Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
            <HeaderSearch />
        </header>
    );
};

export default Header;