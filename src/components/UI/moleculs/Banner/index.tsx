import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
//styles
import styles from './index.module.scss'
//components
import ButtonShopNow from "../../atoms/Button";
//images
import blue from 'assets/images/blueChair.png'
import beige from 'assets/images/beigeChair.png'
import grey from 'assets/images/greyChair.png'
import yellow from 'assets/images/yellowChair.png'
//slider
import {Autoplay, Pagination} from "swiper";

const Banner = () => {
    return (
        <div className={styles.slider}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <div className={styles.slide}>
                        <div className={styles.banner}>
                            <div className={styles.describe}>
                                <p className={styles.top}>Top Collection 2022</p>
                                <p className={styles.title}>We Serve Your Dream Furniture</p>
                                <p className={styles.sale}>Get 50% off all products</p>
                                <ButtonShopNow />
                            </div>
                            <div className={styles.images}>
                                <div className={styles.mainPicture}>
                                    <img src={blue} alt='' />
                                </div>
                                <div className={styles.list}>
                                    <a href='' className={styles.listItem}>
                                        <img src={grey} alt='' />
                                        <p className={styles.price}>$120</p>
                                        <p className={styles.type}>Office Desk Chair</p>
                                    </a>
                                    <a href='' className={styles.listItem}>
                                        <img src={beige} alt='' />
                                        <p className={styles.price}>$180</p>
                                        <p className={styles.type}>Home Alisa Sofa</p>
                                    </a>
                                    <a href='' className={styles.listItem}>
                                        <img src={yellow} alt='' />
                                        <p className={styles.price}>$250</p>
                                        <p className={styles.type}>Modern Chair</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;