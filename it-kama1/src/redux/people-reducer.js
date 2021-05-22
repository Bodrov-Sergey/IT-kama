const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_PEOPLE = "SET_PEOPLE";
const SET_PAGES_COUNT = "SET_PAGES_COUNT";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";


let initialState = {
    peopleData: [],
    pageSize: 10,
    totalPeopleCount: 0,
    activePage: 1
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
        default:
            return state;
    }
}
export const FOLLOW_AC = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const UNFOLLOW_AC = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}
export const SET_PEOPLE_AC = (people_data) => {
    return {
        type: SET_PEOPLE,
        people_data: people_data
    }
}
export const SET_PAGES_COUNT_AC = (count) => {
    return {
        type: SET_PAGES_COUNT,
        count: count
    }
}
export const SET_ACTIVE_PAGE_AC = (value) => {
    return {
        type: SET_ACTIVE_PAGE,
        value: value
    }
}

export default peopleReducer;
