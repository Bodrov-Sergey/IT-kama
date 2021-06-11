import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import {NewPostReduxForm} from "./NewPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    postData: state.profilePage.postData
})

const NewPostContainer = (props)=>{
    let addNewMessage = (text) => {
        props.addPost(text.newPostText);
    };
    return <NewPostReduxForm onSubmit={addNewMessage} />
}

export default connect(mapStateToProps, {addPost})(NewPostContainer);


