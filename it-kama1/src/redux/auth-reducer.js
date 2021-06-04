import {usersAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
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
                ...action.data,
                isAuth: true

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool

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

export const setAuthUserData = (userId, email, login) => {
    return{
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
export const authMe = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.authMe().then(
            response => {
                dispatch(toggleIsFetching(false));
                dispatch(setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login));
                localStorage.setItem("id", response.data.data.id)
                usersAPI.getMe(response.data.data.id).then(response=>{dispatch(setCard(response.data))})
            });
    }
}

export default authReducer;
