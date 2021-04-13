import React from "react";
import s from './Profile.module.css'
import Badge from './Badge/Badge'
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";



const Profile = (props) => {
    return <section>
        <Badge />
        <NewPost />
        <Posts postData={props.postData}/>
    </section>

}
export default Profile;

