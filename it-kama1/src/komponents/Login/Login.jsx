import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";
import {maxLength, required} from "../../utilits/validators/validators.js";
import {Input} from "../common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);


const Login = (props) => {
    return (

        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <Field validate={[required]} placeholder={"Login"} component={Input} name={"login"}/>
            <Field validate={[required]} className={s.input} placeholder={"Password"} type={"password"} component={Input} name={"password"}/>
            <div className={s.rememberMeInputContainer}>
                <Field className={s.rememberMeCheckbox} component={"input"} name={"rememberMe"}
                       type={"checkbox"}/>
                <p className={s.rememberMeText}>Remember me</p>
            </div>
            <div className={s.errorMessage}>
            {props.error? props.error: ""}
            </div>
            <div className={s.buttonContainer}>
                <button className={s.button}>Sign in</button>
                <NavLink to={"/signUp"} className={s.link}>No account? Sign up</NavLink>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({
    form: "login"
})(Login)
