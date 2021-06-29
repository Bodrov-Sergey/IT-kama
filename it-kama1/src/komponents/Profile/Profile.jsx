import React from "react";
import s from './Profile.module.css'
import Badge from './Badge/Badge'
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";
import {uploadAvatar} from "../../redux/profile-reducer";


const Profile = (props) => {
    return <section>
        <Badge uploadAvatar={props.uploadAvatar} profile={props.profile} isOwner={props.isOwner} isFetching={props.isFetching} status={props.status} updateStatus={props.updateStatus}/>
        {props.isOwner && <NewPostContainer />}
        <PostsContainer />
    </section>

}
export default Profile;

