import React from "react";
import mainLogo from "../../Icons/Main-logo.svg"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import UserAuthInfo from "./UserAuthInfo/UserAuthInfo";

const Header = (props) => {
    return <header className={s.header}>
        <img src={mainLogo} alt={"logo"} className={s.img}/>
        <div className={s.loginBlock}>
            { (props.isAuth) ?
                <UserAuthInfo card={props.card} />
                :
                <>{props.isFetching ? <Preloader height={30} />: <NavLink to={"/login"}>
                        <button className={s.button}>Login</button>
                    </NavLink>}</>}


        </div>
    </header>

}
export default Header;
