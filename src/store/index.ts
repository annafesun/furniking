import {configureStore} from '@reduxjs/toolkit';

import sagaMiddleware from "./middlewares/saga";

import _reducer from "./rootReducer";
import _middlewares from './middlewares'
import _saga from './rootSaga'


export const createStore = (reducer = _reducer, middlewares = _middlewares, saga = _saga) => {
    const store = configureStore({
        reducer: reducer,
        middleware: middlewares,
        devTools: true
    });
    sagaMiddleware.run(saga)

    return store
}

export const store = createStore()