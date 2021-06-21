import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";
const SET_CARD = "SET_CARD";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    card: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool

            }
        case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: action.bool

            }
        case SET_CARD:
            return {
                ...state,
                card: action.card
            }
        default:
            return state;
    }
}

export const toggleIsFetching = (bool) => {
    return {
        type: TOGGLE_IS_FETCHING,
        bool
    }
}
export const toggleIsAuth = (bool) => {
    return {
        type: TOGGLE_IS_AUTH,
        bool
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {userId, email, login}
    }
}
export const setCard = (card) => {
    return {
        type: SET_CARD,
        card
    }
}
export const authMe = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return authAPI.authMe()
        .then(response => {
            dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login));
            response.data.messages[0] === "You are not authorized" ? dispatch(toggleIsFetching(false)) : authAPI.getMe(response.data.data.id).then(response => {
                dispatch(setCard(response.data));
                dispatch(toggleIsFetching(false));
                dispatch(toggleIsAuth(true));
            });

        })
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(
            response => {
                if (response.data.resultCode == 0) {
                    dispatch(authMe())
                } else {
                    debugger;
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Not reserved error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(
            response => {
                if (response.data.resultCode == 0) {
                    dispatch(setAuthUserData(null, null, null));
                    dispatch(toggleIsAuth(false));
                    dispatch(setCard(null));
                    dispatch(toggleIsFetching(false));
                }
            })
    }
}

export default authReducer;
