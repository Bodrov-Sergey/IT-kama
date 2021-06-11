import s from "./Chat.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.newMessageContainer}>
            <Field component={"textarea"} className={s.messageInput} name={"message"} placeholder={"Message..."}/>
            <button className={s.sendButton}>Send</button>
        </form>)
};
export const AddMessageFormRedux = reduxForm({form: "newMessage"})(AddMessageForm);