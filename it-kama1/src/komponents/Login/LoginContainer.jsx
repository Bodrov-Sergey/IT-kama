import React from "react";
import {connect} from "react-redux";
import {LoginReduxForm} from "./Login";
import s from "./Login.module.css"
import {Redirect, withRouter} from "react-router-dom";
import {login, logout} from "../../redux/auth-reducer";
import {compose} from "redux";

const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.captcha, formData.rememberMe )
    }
    if (props.isAuth){
        return <Redirect to={"/profile"} />
    }

    return (
        <section className={s.loginWrapper}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit}/>
        </section>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})


export default compose(connect(mapStateToProps, {login, logout}), withRouter)(LoginContainer)
