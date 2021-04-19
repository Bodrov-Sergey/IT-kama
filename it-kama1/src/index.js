import React from "react";
import reportWebVitals from './reportWebVitals';
import state, {addNewPost, changeNewPostTextarea, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let renderFullTree = (state, addNewPost, changeNewPostTextarea) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addNewPost={addNewPost} changeNewPostTextarea={changeNewPostTextarea}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderFullTree(state, addNewPost, changeNewPostTextarea);

subscribe(renderFullTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
