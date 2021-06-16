import React from "react";
import s from "./NewPost.module.css"
import {Field, reduxForm} from "redux-form";
import {TextareaNewPost} from "../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../utilits/validators/validators";

const maxLength1000 = maxLength(1000);
const NewPost = (props) => {

    return <form onSubmit={props.handleSubmit} className={s.container}>
            <Field component={TextareaNewPost} validate={[maxLength1000]} placeholder={"What`s new for today?"} name={"newPostText"}/>
            <button className={s.button}>Send</button>
    </form>
}
export const NewPostReduxForm = reduxForm({form: "newPost"})(NewPost);