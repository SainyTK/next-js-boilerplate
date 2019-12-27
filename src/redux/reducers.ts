import { combineReducers } from 'redux';

import { AuthReducer } from './auth/reducer';

export default combineReducers({
    Auth: AuthReducer
})