import {profileAPI} from "../api/api";
import {reset, stopSubmit} from "redux-form";
import {parseError} from "../utilits/help-functions/reducersHelpFunctions";

const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_CONTACTS_EDIT_MODE = "TOGGLE_CHANGE_CONTACTS_EDIT_MODE";
const UPLOAD_AVATAR_SUCCESS = "UPLOAD_AVATAR_SUCCESS";


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
    contactsEditMode: false

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
        case TOGGLE_CONTACTS_EDIT_MODE:
            return {
                ...state,
                contactsEditMode: action.bool

            }
        case UPLOAD_AVATAR_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.ava}

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
export const toggleContactsEditModeSuccess = (bool) => {
    return {
        type: TOGGLE_CONTACTS_EDIT_MODE,
        bool
    }
}
export const uploadAvatarSuccess = (ava) => {
    return {
        type: UPLOAD_AVATAR_SUCCESS,
        ava
    }
}
export const getUser = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const response = await profileAPI.getUser(id);
        dispatch(toggleIsFetching(false))
        dispatch(setUserProfile(response.data))
    }

}
export const getStatus = (id) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(id)
        dispatch(setUserStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }

    }
}
export const uploadAvatar = (ava) => {
    return async (dispatch) => {
        const response = await profileAPI.uploadAvatar(ava)
        if (response.data.resultCode === 0) {
            dispatch(uploadAvatarSuccess(response.data.data.photos))
        }

    }
}
export const updateContactInfo = (profile) => {
    return async (dispatch, getState) => {
        const id = getState().auth.userId;
        const response = await profileAPI.updateContactInfo(profile)
        if (response.data.resultCode === 0) {
            dispatch(toggleContactsEditMode(false));
            dispatch(getUser(id))
        } else{
            const error = parseError(response.data.messages[0]);
            dispatch(stopSubmit("contactInfo", {...error}));
        }

    }
}
export const updateWithNewPost = (post) => {
    return (dispatch) => {
        dispatch(addPost(post));
        dispatch(reset('newPost'));
    }
}
export const toggleContactsEditMode = (bool) => {
    return (dispatch) => {
        dispatch(toggleContactsEditModeSuccess(bool));
    }
}


export default profileReducer;
