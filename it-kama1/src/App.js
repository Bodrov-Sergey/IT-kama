import React from "react";
import './App.css';
import './zeroing.css'
import Aside from "./komponents/Aside/Aside";
import {Route, withRouter} from "react-router-dom";
import News from "./komponents/News/News";
import Settings from "./komponents/Settings/Settings";
import ChatContainer from "./komponents/Messages/Chat/ChatContainer";
import MessagesContainer from "./komponents/Messages/MessagesContainer";
import PeopleContainer from "./komponents/People/PeopleContainer";
import ProfileContainer from "./komponents/Profile/ProfileContainer";
import HeaderContainer from "./komponents/Header/HeaderContainer";
import LoginContainer from "./komponents/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize} from "./redux/app-reducer";
import Preloader from "./komponents/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <div className={"backWrapper"}>
                <Preloader/>
            </div>
        }
        return (
            <div className={"wrapper"}>
                <HeaderContainer/>
                <Aside/>
                <main className={"main"}>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route exact path='/messages' render={() => <MessagesContainer/>}/>
                    <Route exact path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/messages/chat' render={() => <ChatContainer/>}/>
                    <Route path='/people' render={() => <PeopleContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </main>


            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(withRouter, connect(mapStateToProps, {initialize}))(App);
