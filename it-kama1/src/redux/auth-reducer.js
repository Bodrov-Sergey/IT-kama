import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_DISABLED = "TOGGLE_DISABLED";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";
const SET_CARD = "SET_CARD";
const GET_CAPTCHA = "GET_CAPTCHA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    card: null,
    captcha: null,
    disabled: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data

            }
        case GET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
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
        case TOGGLE_DISABLED:
            return {
                ...state,
                disabled: action.bool
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
export const toggleDisabled = (bool) => {
    return {
        type: TOGGLE_DISABLED,
        bool
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {userId, email, login}
    }
}
export const getCaptchaSuccess = (captcha) => {
    return {
        type: GET_CAPTCHA,
        captcha
    }
}
export const setCard = (card) => {
    return {
        type: SET_CARD,
        card
    }
}
export const authMe = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await authAPI.authMe();
    dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login));
    if (response.data.resultCode === 1) {
        dispatch(toggleIsFetching(false))
        dispatch(toggleDisabled(false));
    } else {
        const responseGetMe = await authAPI.getMe(response.data.data.id);
        dispatch(setCard(responseGetMe.data));
        dispatch(toggleDisabled(false));
        dispatch(toggleIsFetching(false));
        dispatch(toggleIsAuth(true));
        dispatch(getCaptchaSuccess(null));
    }

}

export const login = (email, password, captcha=null, rememberMe=false) => {
    return async (dispatch) => {
        dispatch(toggleDisabled(true));
        const response = await authAPI.login(email, password, captcha, rememberMe);
        if (response.data.resultCode == 0) {
            dispatch(authMe())
        } else {
            if(response.data.resultCode == 10){
                dispatch(getCaptcha())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Not reserved error"
            dispatch(stopSubmit("login", {_error: message}))
            dispatch(toggleDisabled(false));
        }
    }
}
export const getCaptcha = () => {
    return async (dispatch) => {
        const response = await authAPI.getCaptcha();
        dispatch(getCaptchaSuccess(response.data.url))
    }
}
export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout();
        if (response.data.resultCode == 0) {
            dispatch(setAuthUserData(null, null, null));
            dispatch(toggleIsAuth(false));
            dispatch(setCard(null));
            dispatch(toggleIsFetching(false));
        }

    }
}

export default authReducer;
