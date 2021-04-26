import React from "react";
import {ADD_NEW_MESSAGE_ActionCreator, CHANGE_MESSAGE_TEXTAREA_ActionCreator} from "../../../redux/messages-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        chatData: state.messagesPage.chatData,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeMessageTextarea: (body) =>{
            dispatch(CHANGE_MESSAGE_TEXTAREA_ActionCreator(body));
        },
        sendMessage: () => {
            dispatch(ADD_NEW_MESSAGE_ActionCreator());
            dispatch(CHANGE_MESSAGE_TEXTAREA_ActionCreator(''));
        }

    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);


export default ChatContainer;