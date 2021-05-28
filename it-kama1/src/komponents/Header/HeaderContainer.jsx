import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setCard, toggleIsFetching} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authMe().then(
            response => {
                this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
                localStorage.setItem("id", response.data.data.id);
                usersAPI.getMe(response.data.data.id).then(response=>{this.props.setCard(response.data)})
            });

    }


    render() {
        return <Header {...this.props} userId={this.props.userId} card={this.props.card}/>
    }


}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    card: state.auth.card,
    isFetching: state.auth.isFetching
})


export default connect(mapStateToProps, {setAuthUserData, setCard, toggleIsFetching})(HeaderContainer);
;
