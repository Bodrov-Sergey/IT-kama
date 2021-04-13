import React from "react";
import s from './Messages.module.css';
import Dialog from "./Dialog/Dialog";




const Messages = (props) => {
    let messagesItem = props.messagesData.map(d => <Dialog name={d.name} lastMessage={d.lastMessageContext} date={d.lastMessageDate} unreadNum={d.unreadNum} id={d.id}/>)
    return (
        <section className={s.messages}>
            {messagesItem}
        </section>
    )
}
export default Messages;