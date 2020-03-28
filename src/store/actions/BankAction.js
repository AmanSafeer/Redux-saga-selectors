import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from '../constants'


export default class BankAction {

    static fetchUsers() {
        return {
            type: FETCH_USERS
        }
    }
    static fetchUsersSuccess(payload) {
        return {
            type: FETCH_USERS_SUCCESS,
            payload
        }
    }
    static fetchUsersFailure() {
        return {
            type: FETCH_USERS_FAILURE
        }
    }

    static AddUser(payload) {
        return {
            type: ADD_USER,
            payload
        }
    }
    static AddUserSuccess(payload) {
        return {
            type: ADD_USER_SUCCESS,
            payload
        }
    }
    static AddUserFailure() {
        return {
            type: ADD_USER_FAILURE
        }
    }

    static DeleteUser(payload) {
        return {
            type: DELETE_USER,
            payload
        }
    }
    static DeleteUserSuccess(payload) {
        return {
            type: DELETE_USER_SUCCESS,
            payload
        }
    }
    static DeleteUserFailure() {
        return {
            type: DELETE_USER_FAILURE
        }
    }
}