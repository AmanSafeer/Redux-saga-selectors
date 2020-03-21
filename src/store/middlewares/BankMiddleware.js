import { } from '../actions';
import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects'
const api = "https://api.github.com/users "

class BankMiddleware {

    static *FetchUsers() {
        console.log("fecthing users")
        yield put({ type: "USER_FETCH" })
        try {
            const users = yield call(() => {
                fetch(api)
                    .then(res => res.json())
                    .then(res => res)
                    .catch(err => err)
            });
            yield put({ type: "USER_FETCH_SUCCEEDED", payload: users });
            console.log("users", users)
        } catch (e) {
            yield put({ type: "USER_FETCH_FAILED" });
        }
    }

    static *mySagas() {
        yield all([
            yield takeLatest("USER_FETCH", BankMiddleware.FetchUsers)
        ])
    }
}

export default BankMiddleware