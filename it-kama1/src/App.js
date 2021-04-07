import React from "react";
import './App.css';
import './zeroing.css'
import Header from "./komponents/Header/Header";
import Aside from "./komponents/Aside/Aside";
import Profile from "./komponents/Profile/Profile";
import Messages from "./komponents/Messages/Messages";

function App() {
    return (
        <div className={"wrapper"}>
            <Header/>
            <Aside/>
            <main className={"main"}>
                <Messages />

                {/*<Profile />*/}


            </main>


        </div>
    );
}

export default App;
