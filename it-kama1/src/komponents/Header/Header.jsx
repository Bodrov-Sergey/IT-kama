import React from "react";
import mainLogo from "../../Icons/Main-logo.svg"
import s from "./Header.module.css"

const Header = () => {
    return <header className={s.header}>
        <img src={mainLogo} alt={"logo"} className={s.img}/>
    </header>

}
export default Header;
