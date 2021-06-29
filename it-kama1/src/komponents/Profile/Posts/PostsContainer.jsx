import React from "react";
import {connect} from "react-redux";
import Posts from "./Posts";




let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
}

let PostsContainer = connect(mapStateToProps, {})(Posts)

export default PostsContainer;