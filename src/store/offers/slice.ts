import {createSlice} from "@reduxjs/toolkit";
import {OfferStateType} from "./types";
import imgBgc from "../../../src/assets/images/offerBg.png";

const initialState: OfferStateType = {
    offers: [
        {imgBG: imgBgc, statusColor: "blue", statusText: '40% off', newPrice: 200, oldPrice: 500},
        {imgBG: imgBgc, statusColor: "blue", statusText: '40% off'},
    ],
}

const {actions, reducer} = createSlice({
    name: 'offers',
    initialState: initialState,
    reducers: {},
})

export {actions as OffersActions}
export {reducer}