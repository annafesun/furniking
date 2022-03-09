import {Action, combineReducers, ThunkAction} from "@reduxjs/toolkit";
import {reducer as counterReducer} from "./counter";
import {reducer as goodsReducer} from "./goods";
import {reducer as offersReducer} from './offers';
import {reducer as benefitsReducers} from './benefits';
import {reducer as blogsReducers} from './blogs';
import {reducer as testimonialsReducers} from './testimonials';
import {store} from "./index";

export default combineReducers({
    counterReducer,
    goodsReducer,
    offersReducer,
    benefitsReducers,
    blogsReducers,
    testimonialsReducers,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
