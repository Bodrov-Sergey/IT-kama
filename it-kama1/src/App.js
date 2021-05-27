import React from "react";
import './App.css';
import './zeroing.css'
import Header from "./komponents/Header/Header";
import Aside from "./komponents/Aside/Aside";
import Profile from "./komponents/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./komponents/News/News";
import Settings from "./komponents/Settings/Settings";
import ChatContainer from "./komponents/Messages/Chat/ChatContainer";
import MessagesContainer from "./komponents/Messages/MessagesContainer";
import PeopleContainer from "./komponents/People/PeopleContainer";
import ProfileContainer from "./komponents/Profile/ProfileContainer";
import HeaderContainer from "./komponents/Header/HeaderContainer";


function App (props) {
    return (
        <div className={"wrapper"}>
            <HeaderContainer />
            <Aside/>
            <main className={"main"}>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />} />
                <Route exact path='/messages' render={() => <MessagesContainer />}/>
                <Route path='/messages/chat' render={() => <ChatContainer />}/>
                <Route path='/people' render={() => <PeopleContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

            </main>


        </div>

    );
}

export default App;
