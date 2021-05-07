import React from "react";
import s from './Chat.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../../Icons/Avatar.jpg';
import Message from "./Message/Message";


let Chat = (props) => {
    let messages = props.chatData.map(p => <Message text={p.text} dete={p.date} sender={p.sender} />);

    let changeMessageTextarea = (e) => {
        props.changeMessageTextarea(e.target.value);
    };
    let sendMessage = () => {
        props.sendMessage();
    };

    return (
        <section className={s.chatSection}>
            <div className={s.head}>
                <NavLink to={'/messages'} className={s.headItem}>
                    <p className={s.backLink}>Back</p>
                </NavLink>
                <div className={s.headItem}>
                    <h1 className={s.companionName}>Ivan Ivanov</h1>
                </div>
                <div className={s.headItem}>
                    <img className={s.companionAva} src={ava}/>
                </div>
            </div>
            <div className={s.chatContainer}>
                <div className={s.messageContainer}>
                    {messages}
                </div>

            </div>
            <div className={s.newMessageContainer}>
                <textarea className={s.messageInput} placeholder={"Message..."} onChange={changeMessageTextarea}
                          value={props.newMessageText}/>
                <button className={s.sendButton} onClick={sendMessage}>Send</button>
            </div>
        </section>
    );
};
export default Chat;