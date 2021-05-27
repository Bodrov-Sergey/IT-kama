import React from "react";
import {changeMessageTextarea,sendMessage} from "../../../redux/messages-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        chatData: state.messagesPage.chatData,
        newMessageText: state.messagesPage.newMessageText
    }
}

const ChatContainer = connect(mapStateToProps, {sendMessage, changeMessageTextarea})(Chat);


export default ChatContainer;