import React from "react";
import s from './Profile.module.css'
import Badge from './Badge/Badge'
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return <section>
        <Badge/>
        <NewPost newPostText={props.state.newPostText} addNewPost={props.addNewPost}
                 changeNewPostTextarea={props.changeNewPostTextarea}/>
        <Posts postData={props.state.postData}/>
    </section>

}
export default Profile;

