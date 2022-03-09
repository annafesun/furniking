import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CounterStateType} from "./types";

const initialState: CounterStateType = {
    counter: 0
}

const {actions, reducer} = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        addCounterRequest: () => {},
        addCounter: (state) => {
            state.counter = state.counter + 1
        },
    },
})

export {actions as CounterActions}
export {reducer}