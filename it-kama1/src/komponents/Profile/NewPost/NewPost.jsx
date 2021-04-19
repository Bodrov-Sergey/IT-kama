import React from "react";
import s from "./NewPost.module.css"

const NewPost = (props) => {
    let postTextarea = React.createRef();

    let newPostText = () => {
        props.changeNewPostTextarea(postTextarea.current.value);

    };
    let newPostPublish = () => {
        props.addNewPost(props.newPostText);
        props.changeNewPostTextarea("");
    };

    return <div className={s.container}>
        <textarea ref={postTextarea} className={s.input} onChange={newPostText} placeholder={"What`s new for today?"} value={props.newPostText}/>
        <button onClick={newPostPublish} className={s.button}>Send</button>

    </div>
}

export default NewPost;