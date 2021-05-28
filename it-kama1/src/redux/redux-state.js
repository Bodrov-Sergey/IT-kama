import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import peopleReducer from "./people-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    peoplePage: peopleReducer,
    auth: authReducer
});

let store =createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;