import React from "react";
import s from './Profile.module.css'
import Badge from './Badge/Badge'
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return <section>
        <Badge profile={props.profile}/>
        <NewPostContainer />
        <PostsContainer/>
    </section>

}
export default Profile;

