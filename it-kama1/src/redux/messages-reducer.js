const CHANGE_MESSAGE_TEXTAREA = 'CHANGE-MESSAGE-TEXTAREA';
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";


const messagesReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_TEXTAREA:
            state.newMessageText = action.content;
            return state;
        case ADD_NEW_MESSAGE:
            state.chatData.push(
                {
                    date: '',
                    text: state.newMessageText,
                    sender: '1',
                }
            );
            return state;
        default: return state;
    }
}

export const CHANGE_MESSAGE_TEXTAREA_ActionCreator = (text) => {
    return {
        type: CHANGE_MESSAGE_TEXTAREA,
        content: text
    }
}
export const ADD_NEW_MESSAGE_ActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE
    }
}

export default messagesReducer;