import React from "react";
import {connect} from "react-redux";
import {LoginReduxForm} from "./Login";
import s from "./Login.module.css"

const mapStateToProps = (state) => ({})



const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        alert(formData.login +` `+ formData.password)
    }
    return (
        <section className={s.loginWrapper}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </section>
    )
};


export default connect(mapStateToProps)(LoginContainer);