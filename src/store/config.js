import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../store/reducers/rootReducer";
import rootSaga from "./reducers/rootSaga";

function makeStore() {
    const sagaMiddleware = createSagaMiddleware();
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

    const store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default makeStore;