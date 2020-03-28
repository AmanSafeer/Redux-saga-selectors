import { BankAction } from '../actions';
import { delay, call, put, } from 'redux-saga/effects'
import { Toast } from "native-base"
import Axios from "axios";
import { Alert } from 'react-native';
import { NavigationService } from '../../config';
const api = "https://api.github.com/users"


class BankMiddleware {
    static *FetchUsers() {
        try {
            const users = yield call(Axios.get, api)
            yield put(BankAction.fetchUsersSuccess(users.data))
           
        } catch (e) {
            yield put(BankAction.fetchUsersFailure());
        }
    }

    static *AddUser(params) {
        try {
            yield delay(3000)
            yield put(BankAction.AddUserSuccess(params.payload))
            Alert.alert("Success", "Users Added Successfully")
        }
        catch{
            yield put(BankAction.AddUserFailure())
        }
    }

    static *DeleteUser(params) {
        try {
            yield delay(3000)
            yield put(BankAction.DeleteUserSuccess(params.payload))
            Alert.alert("Success", "Users Deleted Successfully")
        }
        catch{
            yield put(BankAction.DeleteUserFailure())
        }
    }
}

export default BankMiddleware