import React from "react";
import s from './Post.module.css';
import ava from '../../../../Icons/Avatar.jpg';
import like from '../../../../Icons/like.svg';

const Post = (props) => {
    return <div className={s.post}>
        <div className={s.personal}>
            <img className={s.ava} src={ava}/>
            <div className={s.info}>
                <h3 className={s.author}>{props.name}</h3>
                <span className={s.date}>05.04.2021</span>
            </div>

        </div>
        <div className={s.content}>
            {props.text}
        </div>
        <div className={s.feedback}>
            <img src={like} className={s.like}/>
            <span className={s.likeCounter}>{props.likes}</span>
        </div>
    </div>
}
export default Post;