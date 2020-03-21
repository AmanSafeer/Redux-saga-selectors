import {

} from '../constants';

const initialState = {
    users: [],
    loader: false
}

export default function BankReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
    switch (action.type) {

        case "USER_FETCH":
            console.log("USER_FETCH")
            state = {
                ...state,
                loader: true
            }
            break;

        case "USER_FETCH_SUCCEEDED":
            state = {
                ...state,
                users: action.payload,
                loader: true
            }
            break;

        case "USER_FETCH_FAILED":
            state = {
                ...state,
                users: [],
                loader: true
            }
            break;

        default:
            break
    }

    return state;
}