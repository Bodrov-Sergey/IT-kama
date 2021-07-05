import React from "react";
import './App.css';
import './zeroing.css'
import Aside from "./komponents/Aside/Aside";
import {BrowserRouter, HashRouter, Redirect, Route, withRouter, Switch} from "react-router-dom";
import News from "./komponents/News/News";
import Settings from "./komponents/Settings/Settings";
import ChatContainer from "./komponents/Messages/Chat/ChatContainer";
import MessagesContainer from "./komponents/Messages/MessagesContainer";
import ProfileContainer from "./komponents/Profile/ProfileContainer";
import HeaderContainer from "./komponents/Header/HeaderContainer";
import LoginContainer from "./komponents/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialize} from "./redux/app-reducer";
import Preloader from "./komponents/common/Preloader/Preloader";
import store from "./redux/redux-state";
import ErrorPageNotFound from "./komponents/Error/ErrorPageNotFound";

const PeopleContainer = React.lazy(() => import("./komponents/People/PeopleContainer"));


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
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route exact path='/messages' render={() => <MessagesContainer/>}/>
                        <Route exact path='/login' render={() => <LoginContainer/>}/>
                        <Route path='/messages/chat' render={() => <ChatContainer/>}/>
                        <Route path='/people' render={() => <React.Suspense
                            fallback={<Preloader/>}><PeopleContainer/></React.Suspense>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='*' render={() => <ErrorPageNotFound/>}/>
                    </Switch>
                </main>


            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})
const AppContainer = compose(withRouter, connect(mapStateToProps, {initialize}))(App);

const GlobalApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default GlobalApp;
