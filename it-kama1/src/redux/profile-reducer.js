import {usersAPI} from "../api/api";
const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_NEW_POST_TEXTAREA = "CHANGE-NEW-POST-TEXTAREA";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    postData: [
        {
            name: 'Bodrov Sergey',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam quas repellendus, sit voluptatibus! Adipisci, architecto autem, commodi, consequatur culpa cum itaque laudantium minima nesciunt nobis quas rem sequi veniam? Ad cupiditate deleniti explicabo libero odit? Aut dolor, dolore fugit nihil odio possimus qui quisquam tempora velit? A animi assumenda consequuntur corporis cumque deserunt dolorem eaque enim est excepturi magnam maxime minima molestiae, nisi, odio pariatur possimus provident quibusdam quis quod repudiandae sint totam ut veniam voluptatum? Amet animi, aperiam commodi cum cumque, delectus deleniti dignissimos dolorem enim eum explicabo facilis impedit iste labore laboriosam libero magni maxime minus nemo nihil nisi nulla provident quam quisquam reiciendis sed sint soluta tempora tenetur totam vel veniam vitae voluptatum. Ab accusantium alias amet commodi delectus doloribus eos exercitationem fuga hic inventore itaque laboriosam, molestias neque nostrum nulla odio optio pariatur perspiciatis porro praesentium quae quod rem totam? Aliquam amet, beatae dicta doloribus eaque earum, error, eveniet facilis ipsa ipsum maiores natus nobis obcaecati possimus quaerat quod ratione recusandae repellat sed tempore vel!',
            likes: '280'
        },
        {
            name: 'Bodrov Sergey',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam quas repellendus, sit voluptatibus! Adipisci, architecto autem, commodi, consequatur culpa cum itaque laudantium minima nesciunt nobis quas rem sequi veniam? Ad cupiditate deleniti explicabo libero odit? Aut dolor, dolore fugit nihil odio possimus qui quisquam tempora velit? A animi assumenda consequuntur corporis cumque deserunt dolorem eaque enim est excepturi magnam maxime minima molestiae, nisi, odio pariatur possimus provident quibusdam quis quod repudiandae sint totam ut veniam voluptatum? Amet animi',
            likes: '10'
        },
        {
            name: 'Bodrov Sergey',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, alias animi architecto beatae esse ipsa laborum minima necessitatibus nesciunt nihil odio officia placeat quisquam repellendus rerum sint voluptatum! Commodi dicta dignissimos distinctio earum esse, est eveniet facere iste laboriosam ',
            likes: '40'
        }
    ],
    newPostText: '',
    profile: null,
    isFetching: false,

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let post = {
                name: 'Bodrov Sergey',
                text: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                postData: [post, ...state.postData],
                newPostText: ''
            }
        case CHANGE_NEW_POST_TEXTAREA:
            return {
                ...state,
                newPostText: action.content
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
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
export const ADD_NEW_POST_ActionCreator = () => {
    return {
        type: ADD_NEW_POST
    }
}
export const CHANGE_NEW_POST_TEXTAREA_ActionCreator = (text) => {
    return {
        type: CHANGE_NEW_POST_TEXTAREA,
        content: text
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
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
        usersAPI.getUser(id).then(
            response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUserProfile(response.data))
            }
        );
    }
}


export default profileReducer;
