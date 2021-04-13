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

function App(props) {
    return (
        <BrowserRouter>
            <div className={"wrapper"}>
                <Header/>
                <Aside/>
                <main className={"main"}>
                    <Route path='/profile' render={() => <Profile postData={props.postData}/>}/>
                    <Route exact path='/messages' render={() => <Messages messagesData={props.messagesData}/>}/>
                    <Route path='/news' render={() => <News />} />
                    <Route path='/settings' render={() => <Settings />} />

                </main>


            </div>
        </BrowserRouter>
    );
}

export default App;
