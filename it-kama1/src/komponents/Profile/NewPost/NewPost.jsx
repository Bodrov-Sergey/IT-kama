import React from "react";
import s from "./NewPost.module.css"
import {Field, reduxForm} from "redux-form";

const NewPost = (props) => {

    return <form onSubmit={props.handleSubmit} className={s.container}>
            <Field component={"textarea"} className={s.input} placeholder={"What`s new for today?"} name={"newPostText"}/>
            <button className={s.button}>Send</button>
    </form>
}
export const NewPostReduxForm = reduxForm({form: "newPost"})(NewPost);