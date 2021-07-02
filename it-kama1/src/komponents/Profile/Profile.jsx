import React from "react";
import s from './Profile.module.css'
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";
import BadgeContainer from "./Badge/BadgeContainer";


const Profile = (props) => {
    return <section>
        <BadgeContainer isOwner={props.isOwner}/>
        {props.isOwner && <NewPostContainer />}
        <PostsContainer />
    </section>

}
export default Profile;

