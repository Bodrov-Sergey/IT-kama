import React from "react";
import s from './Profile.module.css'
import Badge from './Badge/Badge'
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const Profile = () => {
    return <section>
        <Badge />
        <NewPost />
        <Posts />
    </section>

}
export default Profile;
