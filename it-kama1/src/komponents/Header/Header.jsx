import React from "react";
import mainLogo from "../../Icons/Main-logo.svg"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import baseAva from "../../Icons/Profile.svg";

const Header = (props) => {
    return <header className={s.header}>
        <img src={mainLogo} alt={"logo"} className={s.img}/>
        <div className={s.loginBlock}>
            {(props.isAuth && !props.isFetching) ?
                <div className={s.userInfo}>
                    <h2 className={s.fullName}>{props.profile.fullName}</h2>
                    <img className={s.userAva} src={props.profile.photos.small ? props.profile.photos.small :baseAva}/>
                </div>
                : <NavLink to={"/login"}>
                <button className={s.button}>login</button>
            </NavLink>}


        </div>
    </header>

}
export default Header;
