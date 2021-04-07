import React from "react";
import s from './Dialog.module.css';

//УБРАТЬ ИМПОРТ ПОТОМ ПЕРЕДЕЛАТЬ ЧЕРЕЗ ПРОПСУ
import ava from '../../../Icons/Avatar.jpg';

const Dialog = (props) => {
    return (
        <div className={s.container}>
            <img src={ava} className={s.ava}/>
            <div className={s.personal}>
                <h2 className={s.name}>{props.name}</h2>
                <span className={s.date}>{props.date}</span>
                <p className={s.preview}>{props.lastMessage}</p>
                <button className={s.counterUnread}>{props.unreadenNum}</button>
            </div>

        </div>
    )
}
export default Dialog;