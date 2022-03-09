import React from 'react';
//styles
import styles from './styles.module.scss'
//images & icons
import logo from 'assets/images/logo.png'
import facebook from 'assets/icons/icoFacebook.png'
import instagram from 'assets/icons/icoInstagram.png'
import twitter from 'assets/icons/icoTwitter.png'
import pinterest from 'assets/icons/icoPinterset.png'

const Info = () => {
    return (
        <section className={styles.info}>
            <div className={styles.containerFluid}>
                <div className={styles.infoInner}>
                    <div className={styles.social}>
                        <a href='#' className={styles.logo}>
                            <img className={styles.logoImg} src={logo} alt='no img' />
                        </a>
                        <p className={styles.text}>Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
                            consectetur adipiscing
                            elit, sed do eiusmod tempor</p>
                        <ul className={styles.socialNetwork}>
                            <li className={styles.socialNetworkItem}>
                                <a className={styles.socialLink} href=''>
                                    <img className={styles.imgSocialNet} src={twitter} alt='' />
                                </a>
                            </li>
                            <li className={styles.socialNetworkItem}>
                                <a className={styles.socialLink} href=''>
                                    <img className={styles.imgSocialNet} src={instagram} alt='' />
                                </a>
                            </li>
                            <li className={styles.socialNetworkItem}>
                                <a className={styles.socialLink} href=''>
                                    <img className={styles.imgSocialNet} src={pinterest} alt='' />
                                </a>
                            </li>
                            <li className={styles.socialNetworkItem}>
                                <a className={styles.socialLink} href=''>
                                    <img className={styles.imgSocialNet} src={facebook} alt='' />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.communication}>
                        <ul className={styles.buttonList}>
                            <li>
                                <span className={styles.title}>Help </span>
                            </li>
                            <li>
                                <a href='#'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href='#'>Shipping & Delivery</a>
                            </li>
                            <li>
                                <a href='#'>Refund Policy</a>
                            </li>
                            <li>
                                <a href='#'>Track Your Order</a>
                            </li>
                        </ul>
                        <ul className={styles.buttonList}>
                            <li>
                                <span className={styles.title}>Store</span>
                            </li>
                            <li>
                                <a href='#'>Furniture</a>
                            </li>
                            <li>
                                <a href='#'>Tabble</a>
                            </li>
                            <li>
                                <a href='#'>Sofa</a>
                            </li>
                            <li>
                                <a href='#'>Other</a>
                            </li>
                        </ul>
                        <ul className={styles.buttonList}>
                            <li>
                                <span className={styles.title}>Supports</span>
                            </li>
                            <li>
                                <a href='#'>Feedback</a>
                            </li>
                            <li>
                                <a href='#'>Contact us</a>
                            </li>
                            <li>
                                <a href='#'>Download app</a>
                            </li>
                            <li>
                                <a href='#'>Terms conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;