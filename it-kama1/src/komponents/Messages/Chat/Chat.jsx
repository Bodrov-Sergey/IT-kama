import React from "react";
import s from './Chat.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../../Icons/Avatar.jpg';


let Chat = (props) => {
    let newMessageValue = React.createRef();
    let sendMessage = () => {
        alert(newMessageValue.current.value)
    }

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
                chat
            </div>
            <div className={s.newMessageContainer}>
                <textarea className={s.messageInput} placeholder={"Message..."} ref={newMessageValue}/>
                <button className={s.sendButton} onClick={sendMessage}>Send</button>
            </div>
        </section>
    );
};
export default Chat;