import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    ADD_USER,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE
} from '../constants';

const initialState = {
    users: [],
    loader: false
}

export default function BankReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
    switch (action.type) {

        case FETCH_USERS:
            state = {
                ...state,
                loader: true
            }
            break;

        case FETCH_USERS_SUCCESS:
            state = {
                ...state,
                users: action.payload,
                loader: false
            }
            break;

        case FETCH_USERS_FAILURE:
            state = {
                ...state,
                users: [],
                loader: false
            }
            break;

        case ADD_USER:
            state = {
                ...state,
                loader: true
            }
            break;

        case ADD_USER_SUCCESS: {
            const users = [...state.users]
            users.unshift(action.payload)
            state = {
                ...state,
                users,
                loader: false
            }
        }
            break;

        case ADD_USER_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        case DELETE_USER:
            state = {
                ...state,
                loader: true
            }
            break;

        case DELETE_USER_SUCCESS: {
            const users = [...state.users]
            const user = users.find(val => val.id == action.payload.id)
            users.splice(users.indexOf(user), 1)
            state = {
                ...state,
                users,
                loader: false
            }
        }
            break;

        case DELETE_USER_FAILURE:
            state = {
                ...state,
                loader: false
            }
            break;

        default:
            break
    }

    return state;
}