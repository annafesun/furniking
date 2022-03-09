import {createSlice} from "@reduxjs/toolkit";
import {BenefitsStateType} from "./types";
import {DeliverIcon, GiftIcon, HeadPones, WalletIcon} from "../../assets/icons";

const initialState: BenefitsStateType = {
    benefits: [
        {img: DeliverIcon, title: 'Free Shipping', subTitle: 'Orders over $100'},
        {img: GiftIcon, title: "Smart Gift Card", subTitle: 'Buy $1000 to get card'},
        {img: WalletIcon, title: "Quick Payment", subTitle: '100% secure payment'},
        {img: HeadPones, title: "24/7 Support", subTitle: 'Quick support'},
    ]
}

const {actions, reducer} = createSlice({
    name: 'benefits',
    initialState: initialState,
    reducers: {},
})

export {actions as BenefitsActions}
export {reducer}