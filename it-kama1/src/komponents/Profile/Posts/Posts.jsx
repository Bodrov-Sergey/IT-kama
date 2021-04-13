import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";


const Posts = (props) => {

    let postElements = props.postData.map(p => <Post name={p.name} text={p.text} likes={p.likes}/>);

return (
    <section className={s.posts}>
        <h2 className={s.title}>
            My posts
        </h2>
        <div className={s.container}>
            {postElements}
        </div>

    </section>
)
}
export default Posts;