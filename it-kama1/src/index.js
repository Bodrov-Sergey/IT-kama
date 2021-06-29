import React from "react";
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-state";
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import GlobalApp from "./App";


ReactDOM.render(
        <GlobalApp />,
    document.getElementById('root')
);
reportWebVitals();
