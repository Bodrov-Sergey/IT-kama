import React from "react";
import People from './People'
import {connect} from "react-redux";
import {FOLLOW_AC, SET_PEOPLE_AC, UNFOLLOW_AC} from "../../redux/people-reducer";

let mapStateToProps = (state) => {
    return {
        peopleData: state.peoplePage.peopleData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(FOLLOW_AC(id))
        },
        unfollow: (id) => {
            dispatch(UNFOLLOW_AC(id))
        },
        setPeople: (peopleData) => {
            dispatch(SET_PEOPLE_AC(peopleData))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(People);