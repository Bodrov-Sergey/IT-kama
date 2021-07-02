import React from "react";
import s from "./FormsControls.module.css";

export const TextareaNewPost = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.textareaContainer}>
            <textarea className={s.textarea + ` ` + (hasError ? s.textareaError : "")} {...props} {...input} />
            {hasError && <p className={s.errorMessage}>{meta.error}</p>}
        </div>

)
}
export const TextareaNewMessage = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.newMessageContainer}>
            <textarea className={s.messageInput + ` ` + (hasError ? s.textareaError : "")} {...props} {...input} />
            {hasError && <p className={s.errorMessage}>{meta.error}</p>}
        </div>

)
}
export const TextareaProfileInfo = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.profileInfoContainer}>
            <textarea className={s.profileInfo + ` ` + (hasError ? s.textareaError : "")} {...props} {...input} />
            {hasError && <p className={s.errorMessage}>{meta.error}</p>}
        </div>

)
}
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <div>
                <input className={s.input + ` ` + (hasError ? s.inputError : "")} {...props} {...input}/>
            </div>
            {hasError && <p className={s.errorMessage}>{meta.error}</p>}
        </>
    )
}
