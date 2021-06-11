import React from "react";
import s from "./Login.module.css"
import {Field} from "redux-form";
import {NavLink} from "react-router-dom";

const Login = (props) => {
    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <Field className={s.input} placeholder={"Login"} component={"input"} name={"login"}/>
            <Field className={s.input} placeholder={"Password"} component={"input"} name={"password"}/>
            <div className={s.rememberMeInputContainer}>
                <Field className={s.rememberMeCheckbox} component={"input"} name={"rememberMe"}
                       type={"checkbox"}/>
                <p className={s.rememberMeText}>Remember me</p>
            </div>
            <div className={s.buttonContainer}>
                <button className={s.button}>Sign in</button>
                <NavLink to={"/signUp"} className={s.link}>No account? Sign up</NavLink>
            </div>
        </form>
    )
}

export default Login;