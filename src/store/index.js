import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import createSagaMiddleware  from 'redux-saga'
import { createLogger } from "redux-logger"
import { BankMiddleware } from "./middlewares/index"

const sagaMiddleware = createSagaMiddleware()
const mySagas = BankMiddleware.mySagas;

const Store = createStore(
    RootReducer,
    {},
    applyMiddleware(
        createLogger(),
        sagaMiddleware
    )
);

sagaMiddleware.run(mySagas)

export default Store;