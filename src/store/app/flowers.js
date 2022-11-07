import {put, takeEvery} from 'redux-saga/effects';
import api from "../../helpers/api";
import axios from "axios";

/********************
 ACTION TYPES
 ********************/

export const FETCH_FAVORITE_FLOWERS_REQUEST = "FETCH_FAVORITE_FLOWERS_REQUEST";
export const FETCH_FAVORITE_FLOWERS_SUCCESS = "FETCH_FAVORITE_FLOWERS_SUCCESS";

/********************
 ACTIONS
 ********************/

export const fetchFavoriteFlowersRequest = () => ({
    type: FETCH_FAVORITE_FLOWERS_REQUEST
});

export const fetchFavoriteFlowersSuccess = (data) => ({
    type: FETCH_FAVORITE_FLOWERS_SUCCESS,
    data: data
});

/********************
 REDUCER
 ********************/

export const initialState = {
    data: [],
    isFetching: false
};

export const flowers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FAVORITE_FLOWERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_FAVORITE_FLOWERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            };

        default:
            return state
    }
};

export default flowers;

/********************
 SAGAS
 ********************/

// // watcher
export function* flowersWatcher() {
    yield takeEvery(FETCH_FAVORITE_FLOWERS_REQUEST, FETCH_FAVORITE_FLOWERS);
}

export function* FETCH_FAVORITE_FLOWERS() {
    try {
        let response = yield api('/flowers/favorites');

        console.log('response favorites', response.data.fav_flowers)
        let fav_flowers = response.data.fav_flowers;

        yield put( fetchFavoriteFlowersSuccess(fav_flowers) );
    } catch (e) {
        console.log('No flowers found found')
    }
}