import React from "react";
import {connect} from "react-redux";
import {LoginReduxForm} from "./Login";
import s from "./Login.module.css"
import {Redirect} from "react-router-dom";
import {login, logout} from "../../redux/auth-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})



const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe )
    }
    if (props.isAuth){
        return <Redirect to={"/profile"} />
    }

    return (
        <section className={s.loginWrapper}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </section>
    )
};


export default connect(mapStateToProps, {login, logout})(LoginContainer);