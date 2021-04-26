import React from "react";
import './App.css';
import './zeroing.css'
import Header from "./komponents/Header/Header";
import Aside from "./komponents/Aside/Aside";
import Profile from "./komponents/Profile/Profile";
import Messages from "./komponents/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./komponents/News/News";
import Settings from "./komponents/Settings/Settings";
import Chat from "./komponents/Messages/Chat/Chat";


function App(props) {
    return (
        <div className={"wrapper"}>
            <Header/>
            <Aside/>
            <main className={"main"}>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route exact path='/messages' render={() => <Messages state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                <Route path='/messages/chat' render={() => <Chat state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

            </main>


        </div>

    );
}

export default App;
