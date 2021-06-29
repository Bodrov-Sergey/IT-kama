import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";
import {required} from "../../utilits/validators/validators.js";
import {Input} from "../common/FormsControls/FormsControls";
import Button from "../common/Button/Button";

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
                <Button value={"Sign in"} />
                <a href={"https://social-network.samuraijs.com/signUp"} target={"_blank"} className={s.link}>No account? Sign up</a>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({
    form: "login"
})(Login)
