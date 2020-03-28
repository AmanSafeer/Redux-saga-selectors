import { BankMiddleware } from "../middlewares"
import { takeLatest, all } from 'redux-saga/effects'
import { FETCH_USERS, DELETE_USER, ADD_USER } from "../constants"

export function* Sagas() {
    yield all([
        yield takeLatest(FETCH_USERS, BankMiddleware.FetchUsers),
        yield takeLatest(DELETE_USER, BankMiddleware.DeleteUser),
        yield takeLatest(ADD_USER, BankMiddleware.AddUser)
    ])
}