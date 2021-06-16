import s from "./Chat.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {TextareaNewMessage} from "../../common/FormsControls/FormsControls";
import {maxLength} from "../../../utilits/validators/validators";

const maxLength100 = maxLength(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.newMessageContainer}>
            <Field component={TextareaNewMessage} validate={[maxLength100]} name={"message"} placeholder={"Message..."}/>
            <button className={s.sendButton}>Send</button>
        </form>)
};
export const AddMessageFormRedux = reduxForm({form: "newMessage"})(AddMessageForm);