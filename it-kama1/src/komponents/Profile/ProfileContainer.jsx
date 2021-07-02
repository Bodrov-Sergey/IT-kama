import React, {useEffect} from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUser,
    toggleContactsEditMode,
    updateStatus,
    uploadAvatar
} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import {compose} from "redux";

const ProfileContainer = (props) => {
    useEffect(() => {updateComponent()},[props.match.params.userId, props.myProfileId]);

    const updateComponent = () => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.myProfileId;
        }
        if (userId) {
            props.getUser(userId);
            props.getStatus(userId);
        }
    }
    if (!props.match.params.userId && !props.isAuth) {
        return <Redirect to={"/login"}/>
    }
    return <Profile isOwner={!props.match.params.userId || props.match.params.userId==props.myProfileId} />

}

let mapStateToProps = (state) => ({
    myProfileId: state.auth.userId,
    isAuth: state.auth.isAuth,

})


export default compose(
    connect(mapStateToProps, {
        getUser, getStatus
    }), withRouter)(ProfileContainer)


