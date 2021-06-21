import React from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUser, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myProfileId;
        }
        if(userId) {
            this.props.getUser(userId);
            this.props.getStatus(userId);
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.profile) {
            if (this.props.match.params.userId != prevProps.match.params.userId) {
                let userId = this.props.match.params.userId;
                if (!userId) {
                    userId = this.props.myProfileId;
                }
                if(userId) {
                    this.props.getUser(userId);
                    this.props.getStatus(userId);
                }
            }
        }
    }

    render() {
        if(!this.props.match.params.userId && !this.props.isAuth) {
            return <Redirect to={"/login"} />
        }
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
    connect(mapStateToProps, {getUser, getStatus,
        updateStatus}),withRouter)(ProfileContainer)


