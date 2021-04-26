import React from "react";
import s from "./NewPost.module.css"
import {ADD_NEW_POST_ActionCreator, CHANGE_NEW_POST_TEXTAREA_ActionCreator} from "../../../redux/profile-reducer";



const NewPost = (props) => {
    let postTextarea = React.createRef();

    let newPostText = () => {
        props.dispatch(CHANGE_NEW_POST_TEXTAREA_ActionCreator(postTextarea.current.value));

    };
    let newPostPublish = () => {
        props.dispatch(ADD_NEW_POST_ActionCreator());
        props.dispatch(CHANGE_NEW_POST_TEXTAREA_ActionCreator(''));
    };

    return <div className={s.container}>
        <textarea ref={postTextarea} className={s.input} onChange={newPostText} placeholder={"What`s new for today?"} value={props.newPostText}/>
        <button onClick={newPostPublish} className={s.button}>Send</button>

    </div>
}

export default NewPost;