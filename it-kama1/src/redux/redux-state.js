import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import peopleReducer from "./people-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    peoplePage: peopleReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store =createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store

export default store;