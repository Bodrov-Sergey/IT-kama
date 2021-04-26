import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;