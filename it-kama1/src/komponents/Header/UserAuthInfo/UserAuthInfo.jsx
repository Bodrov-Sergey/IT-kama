import React from "react";
import s from "../Header.module.css";
import baseAva from "../../../Icons/Profile.svg";

const UserAuthInfo = (props)=> {
    if (props.profile){
    return <div className={s.userInfo}>
        <h2 className={s.fullName}>{props.profile.fullName}</h2>
        <img className={s.userAva} src={props.profile.photos.small ? props.profile.photos.small : baseAva}/>
    </div>
    } else {
        return <></>
    }
};
export default UserAuthInfo;