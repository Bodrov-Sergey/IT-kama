const CHANGE_MESSAGE_TEXTAREA = 'CHANGE-MESSAGE-TEXTAREA';
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initialState = {
    messagesData: [
        {
            id: '1',
            name: 'Ivan Ivanov',
            lastMessageContext: 'Hi, how are you?',
            lastMessageDate: "08.04.2021",
            unreadNum: '2'
        },
        {
            id: '2',
            name: 'Julia Samoylova',
            lastMessageContext: 'What r u doing?',
            lastMessageDate: "08.04.2021",
            unreadNum: '10'
        },
        {
            id: '3',
            name: 'Ivan Abramov',
            lastMessageContext: 'Great',
            lastMessageDate: "08.04.2021",
            unreadNum: '4'
        },
        {
            id: '4',
            name: 'Max Semenov',
            lastMessageContext: 'And you?',
            lastMessageDate: "08.04.2021",
            unreadNum: '1'
        },
        {id: '5', name: 'Petr Petrov', lastMessageContext: 'Me', lastMessageDate: "08.04.2021", unreadNum: '0'}
    ],
    chatData: [
        {
            date: '',
            text: 'hi',
            sender: '2',
        },
        {
            date: '',
            text: 'hello',
            sender: '1',
        },
        {
            date: '',
            text: 'how is your react studying?',
            sender: '2',
        },
        {
            date: '',
            text: 'is`s good, thanks',
            sender: '1',
        },

    ],
    newMessageText: ''
};

const messagesReducer = (state = initialState, action) => {
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
        default:
            return state;
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