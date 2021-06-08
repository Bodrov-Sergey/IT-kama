import React from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData
    }
}


export default compose(withAuthRedirect,connect(mapStateToProps, {}))(Messages);