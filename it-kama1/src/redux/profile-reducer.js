const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_NEW_POST_TEXTAREA = "CHANGE-NEW-POST-TEXTAREA";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            state.postData.unshift(
                {
                    name: 'Bodrov Sergey',
                    text: state.newPostText,
                    likes: 0
                }
            );
            return state
        case CHANGE_NEW_POST_TEXTAREA:
            state.newPostText = action.content;
            return state
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

export default profileReducer;
