import {combineReducers} from 'redux';
// import authentication from './../app/auth';
// import flowers from "../app/flowers";
// import user from "../app/user";
import sightings from "../app/sightings";
import counterReducer from "../app/counter";
import flowers from "../app/flowers";

const rootReducer = combineReducers({
    sightings,
    flowers,
    cr: counterReducer
});

export default rootReducer;