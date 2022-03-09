import React from 'react';
//components
import SiteBar from "../../moleculs/SiteBar";
import Menu from "../../moleculs/Menu";
import Banner from "../../moleculs/Banner";
//styles
import styles from './index.module.scss'
import shared from 'styles/shared.module.scss'

const SectionMenu = () => {
    return (
        <div className={shared.containerFluid}>
            <div className={styles.siteBarAndMenu}>
                <SiteBar className={styles.sideBar} />
                <div className={styles.menuAndBanner}>
                    <Menu />
                    <Banner />
                </div>
            </div>
        </div>
    );
};

export default SectionMenu;