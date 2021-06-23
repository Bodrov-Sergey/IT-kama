import React from "react";
import {updateWithNewMessage} from "../../../redux/messages-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        chatData: state.messagesPage.chatData,
    }
}
export default connect(mapStateToProps, {updateWithNewMessage})(Chat);