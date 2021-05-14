import React from "react";

import {connect} from "react-redux";
import Following from './Following'
import {FOLLOW_AC, SET_USERS_AC, UNFOLLOW_AC} from "../../redux/following-reducer";

let mapStateToProps = (state) => {
    return{
        usersData: state.followingPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(FOLLOW_AC(id));
        },
        unfollow: (id) => {
            dispatch(UNFOLLOW_AC(id));
        },
        setUsers: (users) => {
            dispatch(SET_USERS_AC(users))
        }
    }
}

const FollowingContainer = connect(mapStateToProps, mapDispatchToProps)(Following);

export default FollowingContainer;