import React from "react";
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myProfileId ? this.props.myProfileId : localStorage.getItem("id");
        }
        this.props.getUser(userId);
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
            }
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    myProfileId: state.auth.userId
})
let WithRouterProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUser})(WithRouterProfileContainer);

