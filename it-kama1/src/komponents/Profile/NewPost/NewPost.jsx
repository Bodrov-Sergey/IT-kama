import React from "react";
import s from "./NewPost.module.css"

const NewPost = () => {
    return <div className={s.container}>
        <form className={s.form}>
            <input className={s.input} placeholder={"What`s new for today?"}/>
            <button type='submit' className={s.button}>Send</button>
        </form>
    </div>
}

export default NewPost;