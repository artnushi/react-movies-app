import {all} from 'redux-saga/effects';
import {sightingsWatcher} from "../app/sightings";
import {flowersWatcher} from "../app/flowers";

export function* rootSaga() {
    yield all([
        sightingsWatcher(),
        flowersWatcher()
    ])
}

export default rootSaga;