const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
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

export default authReducer;
