import React from "react";
import mainLogo from "../../Icons/Main-logo.svg"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src={mainLogo} alt={"logo"} className={s.img}/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.userId : <NavLink to={"/login"}>
                <button className={s.button}>login</button>
            </NavLink>}


        </div>
    </header>

}
export default Header;
