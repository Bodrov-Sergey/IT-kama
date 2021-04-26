import React from "react";
import s from "./NewPost.module.css"



const NewPost = (props) => {
console.log(props)

    let newPostText = (e) => {
        props.newPostText(e.target.value);
    };
    let newPostPublish = () => {
        props.newPostPublish();
        props.newPostText('');
    };

    return <div className={s.container}>
        <textarea className={s.input} onChange={newPostText} placeholder={"What`s new for today?"} value={props.newPostTextValue}/>
        <button onClick={newPostPublish} className={s.button}>Send</button>

    </div>
}

export default NewPost;