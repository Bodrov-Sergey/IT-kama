import {usersAPI} from "../api/api";
import {updateObject} from "../utilits/help-functions/reducersHelpFunctions";

const FOLLOW = "redux/people/FOLLOW";
const UNFOLLOW = "redux/people/UNFOLLOW";
const SET_PEOPLE = "redux/people/SET_PEOPLE";
const SET_PAGES_COUNT = "redux/people/SET_PAGES_COUNT";
const SET_ACTIVE_PAGE = "redux/people/SET_ACTIVE_PAGE";
const TOGGLE_IS_FETCHING = "redux/people/TOGGLE_IS_FETCHING";
const TOGGLE_DISABLED = "redux/people/TOGGLE_DISABLED";


let initialState = {
    peopleData: [],
    pageSize: 10,
    totalPeopleCount: 0,
    activePage: 1,
    isFetching: false,
    disabled: []

};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                peopleData: updateObject(state.peopleData, action.id , "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                peopleData: updateObject(state.peopleData, action.id , "id", {followed: false})
            }
        case SET_PEOPLE:
            return {
                ...state,
                peopleData: [...action.people_data]
            }
        case SET_PAGES_COUNT:
            return {
                ...state,
                totalPeopleCount: action.count

            }
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.value

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool

            }
        case TOGGLE_DISABLED:
            return {
                ...state,
                disabled: action.bool ? [...state.disabled, action.id] : [state.disabled.filter(id => id != action.id)]


            }
        default:
            return state;
    }
}
export const accessFollow = (id) => {
    return {
        type: FOLLOW,
        id
    }
}
export const accessUnfollow = (id) => {
    return {
        type: UNFOLLOW,
        id
    }
}
export const setPeople = (people_data) => {
    return {
        type: SET_PEOPLE,
        people_data
    }
}
export const setPagesCount = (count) => {
    return {
        type: SET_PAGES_COUNT,
        count
    }
}
export const setActivePage = (value) => {
    return {
        type: SET_ACTIVE_PAGE,
        value
    }
}
export const toggleIsFetching = (bool) => {
    return {
        type: TOGGLE_IS_FETCHING,
        bool
    }
}
export const toggleDisabled = (bool, id) => {
    return {
        type: TOGGLE_DISABLED,
        bool,
        id
    }
}
export const getUsers = (activePage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const response = await usersAPI.getUsers(activePage, pageSize);
        dispatch(toggleIsFetching(false))
        dispatch(setPeople(response.items))
        dispatch(setPagesCount(response.totalCount))
    }
}
const accessFollowUnfollow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleDisabled(true, id))
    const response = await apiMethod;
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleDisabled(false, id))
}
export const follow = (id) => {
    return async (dispatch) => {
        accessFollowUnfollow(dispatch, id, usersAPI.followUser(id), accessFollow)
    }
}
export const unfollow = (id) => {
    return async (dispatch) => {
        accessFollowUnfollow(dispatch, id, usersAPI.unfollowUser(id), accessUnfollow)
    }
}
export default peopleReducer;
