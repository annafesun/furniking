import React from 'react';
//hooks
import {useHistory} from "react-router-dom";
//images & icons
import logo from 'assets/images/logo.png'
import avatar from 'assets/icons/headerIcoAvatar.png'
import basket from 'assets/icons/headerIcoBasket.png'
import notification from 'assets/icons/headerIcoNotification.png'
import search from 'assets/icons/headerIcoSearch.png'
//styles
import styles from './styles.module.scss'
import shared from 'styles/shared.module.scss'
//constants
import {routes} from "../../../../constants/routes";


const HeaderSearch: React.FC<{}> = () => {
    const history = useHistory()

    return (
        <section className={styles.headerSearch}>
            <div className={shared.containerFluid}>
                <div className={styles.headerSearchInner}>
                    <a
                        onClick={() => history.push(routes.home)}
                        href='#'
                        className={styles.logo}
                    >
                        <img src={logo} alt='' />
                    </a>
                    <form className={styles.request}>
                        <input className={styles.input} type='text' placeholder='Search here...' />
                        <select className={styles.inputSelect}>
                            <option value='' hidden disabled>Categories</option>
                            <option>Sofa</option>
                            <option>Chair</option>
                        </select>
                        <a href='' className={styles.inputLink}>
                            <img
                                className={styles.inputIcon}
                                src={search} alt=''
                            />
                        </a>
                    </form>
                    <ul className={styles.profile}>
                        <li className={styles.profileItem}>
                            <a href=''>
                                <img src={avatar} alt='' />
                            </a>
                        </li>
                        <li className={styles.profileItem}>
                            <a href=''>
                                <img src={notification} alt='' />
                            </a>
                        </li>
                        <li className={styles.profileItem}>
                            <a href=''>
                                <img src={basket} alt='' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HeaderSearch;