import React from "react";
import './App.css';
import './zeroing.css'
import Header from "./komponents/Header";
import Aside from "./komponents/Aside";
import Profile from "./komponents/Profile";

function App() {
    return (
        <div className={"wrapper"}>
            <Header/>
            <Aside/>
            <main className={"main"}>
                <Profile />
            </main>


        </div>
    );
}

export default App;
