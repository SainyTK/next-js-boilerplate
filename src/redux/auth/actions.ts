export const AuthActionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

export const AuthActions = {
    login: () => (dispatch, getState) => {
        const user = {
            name: 'User 1',
            age: 20
        }
        dispatch({ type: AuthActionTypes.LOGIN, payload: user })
    },
    logout: () => (dispatch, getState) => {
        dispatch({ type: AuthActionTypes.LOGOUT })
    }
}
