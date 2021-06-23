import {profileAPI} from "../api/api";
import {reset} from "redux-form";
const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    postData: [
        {
            id: 1,
            name: 'Bodrov Sergey',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam quas repellendus, sit voluptatibus! Adipisci, architecto autem, commodi, consequatur culpa cum itaque laudantium minima nesciunt nobis quas rem sequi veniam? Ad cupiditate deleniti explicabo libero odit? Aut dolor, dolore fugit nihil odio possimus qui quisquam tempora velit? A animi assumenda consequuntur corporis cumque deserunt dolorem eaque enim est excepturi magnam maxime minima molestiae, nisi, odio pariatur possimus provident quibusdam quis quod repudiandae sint totam ut veniam voluptatum? Amet animi, aperiam commodi cum cumque, delectus deleniti dignissimos dolorem enim eum explicabo facilis impedit iste labore laboriosam libero magni maxime minus nemo nihil nisi nulla provident quam quisquam reiciendis sed sint soluta tempora tenetur totam vel veniam vitae voluptatum. Ab accusantium alias amet commodi delectus doloribus eos exercitationem fuga hic inventore itaque laboriosam, molestias neque nostrum nulla odio optio pariatur perspiciatis porro praesentium quae quod rem totam? Aliquam amet, beatae dicta doloribus eaque earum, error, eveniet facilis ipsa ipsum maiores natus nobis obcaecati possimus quaerat quod ratione recusandae repellat sed tempore vel!',
            likes: '280'
        },
        {
            id: 2,
            name: 'Bodrov Sergey',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam quas repellendus, sit voluptatibus! Adipisci, architecto autem, commodi, consequatur culpa cum itaque laudantium minima nesciunt nobis quas rem sequi veniam? Ad cupiditate deleniti explicabo libero odit? Aut dolor, dolore fugit nihil odio possimus qui quisquam tempora velit? A animi assumenda consequuntur corporis cumque deserunt dolorem eaque enim est excepturi magnam maxime minima molestiae, nisi, odio pariatur possimus provident quibusdam quis quod repudiandae sint totam ut veniam voluptatum? Amet animi',
            likes: '10'
        },
        {
            id: 3,
            name: 'Bodrov Sergey',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam ',
            likes: '40'
        }
    ],
    profile: null,
    isFetching: false,
    status: "",

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 4,
                name: 'Bodrov Sergey',
                text: action.post,
                likes: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
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
export const addPost = (post) => {
    return {
        type: ADD_NEW_POST,
        post
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setUserStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const toggleIsFetching = (bool) => {
    return {
        type: TOGGLE_IS_FETCHING,
        bool
    }
}
export const getUser = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        profileAPI.getUser(id).then(
            response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUserProfile(response.data))
            }
        );
    }
}
export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(
            response => {
                dispatch(setUserStatus(response.data))
            }
        );
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            }
        );
    }
}
export const updateWithNewPost = (post) => {
    return (dispatch) => {
        dispatch(addPost(post));
        dispatch(reset('newPost'));
    }
}


export default profileReducer;
