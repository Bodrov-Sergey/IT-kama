import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setUserProfile, toggleIsFetching} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authMe().then(
            response => {
                this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
                if (response.data.resultCode === 0) {
                    this.props.toggleIsFetching(true);
                    usersAPI.getUser(response.data.data.id).then(response => {
                        toggleIsFetching(false);
                        this.props.setUserProfile(response.data);

                    })
                }});
    }


    render() {
        return <Header {...this.props} userId={this.props.userId}/>
    }


}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.auth.profile,
    isFetching: state.auth.isFetching
})


export default connect(mapStateToProps, {setAuthUserData, setUserProfile, toggleIsFetching})(HeaderContainer);;
