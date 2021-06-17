import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()

    }
    render() {
        return <Header {...this.props} logout={this.props.logout} userId={this.props.userId} card={this.props.card}/>
    }
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    card: state.auth.card,
    isFetching: state.auth.isFetching
})
export default connect(mapStateToProps, {authMe, logout})(HeaderContainer);
;
