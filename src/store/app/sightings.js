import {put, takeEvery} from 'redux-saga/effects';
// import api from "../../utils/api";


import {ACTION_INCREMENT_TYPE} from "./counter";
import api from "../../helpers/api";

/********************
 ACTION TYPES
 ********************/

export const FETCH_SIGHTINGS_REQUEST = "FETCH_SIGHTINGS_REQUEST";
export const FETCH_SIGHTINGS_SUCCESS = "FETCH_SIGHTINGS_SUCCESS";

/********************
 ACTIONS
 ********************/

export const fetchSightingsRequest = () => ({
    type: FETCH_SIGHTINGS_REQUEST
});

export const fetchSightingsSuccess = (data) => ({
    type: FETCH_SIGHTINGS_SUCCESS,
    data: data
});

/********************
 REDUCER
 ********************/

export const initialState = {
    data: [],
    isFetching: false,
    countValueName: "Click me to increase"
};

export const sightings = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SIGHTINGS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_SIGHTINGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };

        case ACTION_INCREMENT_TYPE:
            return {
                ...state,
                countValueName: 'updated!'
            }

        // case FETCH_SIGHTINGS_SUCCESS:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         sightings: action.sightings
        //     };

        default:
            return state
    }
};

export default sightings;

/********************
 SAGAS
 ********************/

// // watcher
export function* sightingsWatcher() {
    yield takeEvery(FETCH_SIGHTINGS_REQUEST, FETCH_SIGHTINGS);
}

export function* FETCH_SIGHTINGS() {
    try {
        let response = yield api.get('sightings');

        let sightings = response.data.sightings;

        yield put( fetchSightingsSuccess(sightings) );
    } catch (e) {
        console.log('No sighting found')
    }
}