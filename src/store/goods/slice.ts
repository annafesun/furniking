import {createSlice, PayloadAction} from "@reduxjs/toolkit";
//types
import {GoodsStateType, Pages} from "./types";
//images
import {ChairBeige, Chair3, Chair4, ChairBlack} from "../../assets/images";

const initialState: GoodsStateType = {
    goods: [
        {img: ChairBeige, statusColor: 'blue', statusText: '-30%', type: "sofa", page: 'new'},
        {img: Chair3, statusColor: 'red', statusText: '-30%', type: "sofa", page: 'new'},
        {img: Chair4, statusColor: 'green', statusText: '-30%', type: "sofa", page: 'best'},
        {img: ChairBlack, statusColor: 'green', statusText: '-30%', type: "sofa", page: 'top'},
    ],
    pages: [
        {key: 'top', label: 'Top Products'},
        {key: 'new', label: 'New Arrivals'},
        {key: 'best', label: 'Best Sellers'}
    ],
    currentPage: 'top',
}

const {actions, reducer} = createSlice({
    name: 'goods',
    initialState: initialState,
    reducers: {
        changePage: (state, {payload: page}: PayloadAction<Pages>) => {
            state.currentPage = page
        }
    },
})

export {actions as GoodsActions}
export {reducer}