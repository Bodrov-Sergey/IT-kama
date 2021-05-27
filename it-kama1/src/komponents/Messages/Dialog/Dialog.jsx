import React from "react";
import s from './Dialog.module.css';

//УБРАТЬ ИМПОРТ ПОТОМ ПЕРЕДЕЛАТЬ ЧЕРЕЗ ПРОПСУ
import baseAva from '../../../Icons/Profile.svg';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let counterUnread = s.counterUnread_active
    if (props.unreadNum == 0) {
        counterUnread = s.counterUnread;
    }
    return (
        <NavLink to={'/messages/chat/' + props.id} className={s.container}>
            <img src={baseAva} className={s.ava}/>
            <div className={s.personal}>
                <h2 className={s.name}>{props.name}</h2>
                <span className={s.date}>{props.date}</span>
                <p className={s.preview}>{props.lastMessage}</p>
                <button className={counterUnread}>{props.unreadNum}</button>
            </div>

        </NavLink>
    )
}
export default Dialog;