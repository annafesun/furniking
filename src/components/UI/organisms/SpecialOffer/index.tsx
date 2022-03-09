import React from 'react';
//components
import SectionTitle from "../../atoms/SectionTitle";
import Offer from "../../moleculs/Offer";
//hooks
import {useAppSelector} from "../../../../store/hooks";
//styles
import shared from "../../../../styles/shared.module.scss";
import styles from './index.module.scss'

const SpecialOffer: React.FC<{}> = () => {
    const {offers} = useAppSelector(({offersReducer}) => offersReducer)

    return (
        <div className={shared.section}>
            <div className={shared.containerFluid}>
                <SectionTitle text='Special Offer' />
                <div className={styles.offers}>
                    {offers?.map((offer, index) => (
                        <div
                            key={offer.imgBG + index}
                            className={styles.offer}
                        >
                            <Offer  {...offer} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;