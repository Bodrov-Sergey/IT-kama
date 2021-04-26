import React from "react";
import {ADD_NEW_POST_ActionCreator, CHANGE_NEW_POST_TEXTAREA_ActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";



const superNewPostContainer = (props) => {
    let state = props.store.getState();

    let newPostText = (body) => {
        props.store.dispatch(CHANGE_NEW_POST_TEXTAREA_ActionCreator(body));

    };
    let newPostPublish = () => {
        props.store.dispatch(ADD_NEW_POST_ActionCreator());
        props.store.dispatch(CHANGE_NEW_POST_TEXTAREA_ActionCreator(''));
    };

    return (
        <NewPost newPostText={newPostText} newPostPublish={newPostPublish} newPostTextValue={state.profilePage.newPostText}/>
        )


}

let mapStateToProps = (state) => {
    return {
        newPostTextValue: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newPostText: (body) => {
            dispatch(CHANGE_NEW_POST_TEXTAREA_ActionCreator(body));
        },
        newPostPublish: () => {
            dispatch(ADD_NEW_POST_ActionCreator());
            dispatch(CHANGE_NEW_POST_TEXTAREA_ActionCreator(''));
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);



export default NewPostContainer;