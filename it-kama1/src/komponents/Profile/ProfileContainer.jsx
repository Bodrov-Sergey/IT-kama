import React from "react";
import s from './Profile.module.css'
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(
            response => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
            }
        );
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching} />
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching
})
let WithRouterProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(WithRouterProfileContainer);

