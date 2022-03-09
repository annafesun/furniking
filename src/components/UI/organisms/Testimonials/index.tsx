import React from 'react';
//slider
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay, Pagination} from "swiper";
//styles
import styles from './index.module.scss'
import shared from 'styles/shared.module.scss'
import "swiper/css";
import "swiper/css/navigation";
import "styles/swiper.scss";
//components
import Testimonial from "../../moleculs/Testimonial";
import SectionTitle from "../../atoms/SectionTitle";
//hooks
import {useAppSelector} from "../../../../store/hooks";


const Testimonials = () => {
    const {testimonials} = useAppSelector(({testimonialsReducers}) => testimonialsReducers)

    return (
        <div className={shared.section}>
            <div className={shared.containerFluid}>
                <SectionTitle text={'What Our Customer Says'} />
                <div className={styles.testimonials}>
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
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className='mySwiper'
                    >
                        {testimonials?.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.img + index}>
                                <div className={styles.testimonial}>
                                    <Testimonial {...testimonial} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;