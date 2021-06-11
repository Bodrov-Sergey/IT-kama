import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {reduxForm} from "redux-form";
import s from "./Login.module.css"

const mapStateToProps = (state) => ({})



const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <section className={s.loginWrapper}>
            <h1 className={s.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </section>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(Login)


export default connect(mapStateToProps)(LoginContainer);