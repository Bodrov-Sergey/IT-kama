import React from "react";
import s from "../Header.module.css";
import baseAva from "../../../Icons/Profile.svg";

const UserAuthInfo = (props)=> {
    if (props.card){
    return <div className={s.userInfo}>
        <h2 className={s.fullName}>{props.card.fullName}</h2>
        <img className={s.userAva} src={props.card.photos.small? props.card.photos.small :baseAva}/>
    </div>
    } else {
        return <></>
    }
};
export default UserAuthInfo;