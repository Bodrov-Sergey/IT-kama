import React from "react";
import s from './Message.module.css';


const Message = (props) => {
    let nameClass, containerClass;
    if (props.sender == 1) {
        nameClass = s.myMessage;
        containerClass = s.myMessageContainer
    } else {
        nameClass = s.friendMessage;
        containerClass  = s.friendMessageContainer
    }
    return (
        <div className={s.messageContainer}>
            <div className={nameClass}>
                {props.text}
            </div>
        </div>

    )
}

export default Message;