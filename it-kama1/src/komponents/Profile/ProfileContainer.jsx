import React from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUser, updateStatus} from "../../redux/profile-reducer";
import {withRouter, Redirect} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myProfileId ? this.props.myProfileId : localStorage.getItem("id");
        }
        this.props.getUser(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate() {
        let urlWay = this.props.match.params.userId;
        if (this.props.profile) {
            if (!urlWay && this.props.profile.userId != localStorage.getItem("id")) {
                let userId = this.props.match.params.userId;
                if (!userId) {
                    userId = this.props.myProfileId ? this.props.myProfileId : localStorage.getItem("id");
                }
                this.props.getUser(userId);
                this.props.getStatus(userId);
            }
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myProfileId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})



export default compose(
    // withAuthRedirect ,
    connect(mapStateToProps, {getUser, getStatus,
        updateStatus}),withRouter)(ProfileContainer)

