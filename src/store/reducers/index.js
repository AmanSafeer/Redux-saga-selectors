import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BankReducer from './BankReducer';

const RootReducer = combineReducers({
    AuthReducer,
    BankReducer
});

export default RootReducer;