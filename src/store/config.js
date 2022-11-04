// import {applyMiddleware, createStore} from 'redux'
import {applyMiddleware, createStore} from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { createWrapper } from 'next-redux-wrapper'
// import {rootSaga} from "./reducers/rootSaga";
import rootReducer from "../store/reducers/rootReducer";

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

function makeStore (initialState = {}) {
    // const sagaMiddleware = createSagaMiddleware()
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    // store.sagaTask = sagaMiddleware.run(rootSaga)

    // return store
}

export default makeStore

// export const wrapper = createWrapper(makeStore, { debug: true })