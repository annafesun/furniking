import {spawn} from "redux-saga/effects";

import {saga as counter} from './counter'

export default function* () {
    yield spawn(counter)
}