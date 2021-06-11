import React from "react";
import s from './Chat.module.css';
import {NavLink} from "react-router-dom";
import baseAva from '../../../Icons/Profile.svg';
import Message from "./Message/Message";
import {AddMessageFormRedux} from "./AddMessageForm";

const Chat = (props) => {
    let messages = props.chatData.map(p => <Message text={p.text} dete={p.date} sender={p.sender}/>);
    let addNewMessage = (text) => {
        props.sendMessage(text.message);
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
                    <img className={s.companionAva} src={baseAva}/>
                </div>
            </div>
            <div className={s.chatContainer}>
                <div className={s.messageContainer}>
                    {messages}
                </div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </section>
    );
};


export default Chat;