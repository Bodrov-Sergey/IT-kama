const CHANGE_MESSAGE_TEXTAREA = 'CHANGE-MESSAGE-TEXTAREA';
const SEND_MESSAGE = "SEND_MESSAGE";

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

    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                date: '',
                text: action.message,
                sender: '1',
            }
            return  {
                ...state,
                chatData: [...state.chatData, message]
            };
        default:
            return state;
    }
}
export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    }
}

export default messagesReducer;