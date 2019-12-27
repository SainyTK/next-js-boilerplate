import { AuthActionTypes } from './actions';

const inititialState = {
  user: null
}

export const AuthReducer = (state = inititialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null
      }
    default: return state;
  }
}