import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(
            response => {
                if (response.data.resultCode === 0) {

                    this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)

                }});
    }


    render() {
        return <Header {...this.props} userId={this.props.userId}/>
    }


}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);;
