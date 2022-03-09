import {put} from 'redux-saga/effects'
import {CounterActions} from "../slice";

export function* addCounterWorker() {
    try {
        /// login response
        // if (response.good) {
        //     yield put(CounterActions.changeUserStatus({logged: true}))
        // } else{
        //     yield put(CounterActions.failedLogin({loginError: 'incorrect password'}))
        // }
        yield put(CounterActions.addCounter())

    } catch (e) {
        console.log('addCounterWorker e - ', e)
    }
}