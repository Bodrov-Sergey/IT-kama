const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_PEOPLE = "SET_PEOPLE";

let initialState = {
    peopleData: [
        {id: 1, name: 'Samoylova Julia', followed: true, status: 'welcome to my page'},
        {id: 2, name: 'David Dust', followed: true, status: 'welcome to my page'},
        {id: 3, name: 'Ilon Mask', followed: false, status: 'welcome to my page'},
        {id: 4, name: 'Andrey JS', followed: false, status: 'welcome to my page'},
        {id: 5, name: 'Egor Ignatyev', followed: false, status: 'welcome to my page'},
        {id: 6, name: 'Valeriy Andreev', followed: true, status: 'welcome to my page'}
    ]
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                peopleData: state.peopleData.map(u => {
                    if (u.id === action.id){
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                peopleData: state.peopleData.map(u => {
                    if (u.id === action.id){
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_PEOPLE:
            return {
                ...state,
                peopleData: [...state.peopleData, ...action.people_data]
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

export default peopleReducer;
