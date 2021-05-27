const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_PEOPLE = "SET_PEOPLE";
const SET_PAGES_COUNT = "SET_PAGES_COUNT";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_DISABLED = "TOGGLE_DISABLED";


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
                peopleData: state.peopleData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                peopleData: state.peopleData.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false};
                    }
                    return u;
                })
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
            debugger
            return {
                ...state,
                disabled: action.bool ? [...state.disabled, action.id] : [state.disabled.filter(id => id != action.id)]


            }
        default:
            return state;
    }
}
export const follow = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}
export const setPeople = (people_data) => {
    return {
        type: SET_PEOPLE,
        people_data: people_data
    }
}
export const setPagesCount = (count) => {
    return {
        type: SET_PAGES_COUNT,
        count: count
    }
}
export const setActivePage = (value) => {
    return {
        type: SET_ACTIVE_PAGE,
        value: value
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

export default peopleReducer;
