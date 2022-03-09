import {all, takeLatest} from 'redux-saga/effects'
import {CounterActions} from "../slice";
import {addCounterWorker} from "./workers";


function* watchAddCounter (){
    yield takeLatest(CounterActions.addCounterRequest, addCounterWorker)
}

export default function* () {
    yield all([
        watchAddCounter()
    ])
}