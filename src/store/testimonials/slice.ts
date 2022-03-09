import {createSlice} from "@reduxjs/toolkit";
//components
import {TestimonialsStateType} from "./types";
//images
import {avatar} from "../../assets/images";

const initialState: TestimonialsStateType = {
    testimonials: [
        {img: avatar, content: 'Very good', author: 'Vasuliy Pupkin', jobPosition: 'devs'},
        {img: avatar, content: 'Very good', author: 'Ania Fesun', jobPosition: 'devs'},
    ]
}

const {actions, reducer} = createSlice({
    name: 'testimonials',
    initialState: initialState,
    reducers: {},
})

export {actions as TestimonialsActions}
export {reducer}