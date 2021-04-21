import React from "react";
import s from "./NewPost.module.css"

const NewPost = (props) => {
    let postTextarea = React.createRef();

    let newPostText = () => {
        props.dispatch({type:'CHANGE-NEW-POST-TEXTAREA', content: postTextarea.current.value});

    };
    let newPostPublish = () => {
        props.dispatch({type: 'ADD-NEW-POST'});
        props.dispatch({type:'CHANGE-NEW-POST-TEXTAREA', content: ''});
    };

    return <div className={s.container}>
        <textarea ref={postTextarea} className={s.input} onChange={newPostText} placeholder={"What`s new for today?"} value={props.newPostText}/>
        <button onClick={newPostPublish} className={s.button}>Send</button>

    </div>
}

export default NewPost;