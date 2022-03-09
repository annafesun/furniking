import {createSlice} from "@reduxjs/toolkit";
//components
import {BlogsStateType} from "./types";
//images
import {cardFurniture} from "../../assets/images";
import {cardChair} from "../../assets/images";

const initialState: BlogsStateType = {
    blogs: [
        {img: cardFurniture, text: 'Furniture', title: 'Sale'},
        {img: cardChair, text: 'Chair', date: '14 December 2022'}
    ]
}

const {actions, reducer} = createSlice({
    name: 'blogs',
    initialState: initialState,
    reducers: {},
})

export {actions as BlogsActions}
export {reducer}