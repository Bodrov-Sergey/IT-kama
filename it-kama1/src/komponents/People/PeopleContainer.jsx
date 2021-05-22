import React from "react";
import PeopleAPIContainer from './PeopleAPIContainer'
import {connect} from "react-redux";
import {
    FOLLOW_AC,
    SET_ACTIVE_PAGE_AC,
    SET_PAGES_COUNT_AC,
    SET_PEOPLE_AC,
    UNFOLLOW_AC
} from "../../redux/people-reducer";

let mapStateToProps = (state) => {
    return {
        peopleData: state.peoplePage.peopleData,
        pageSize: state.peoplePage.pageSize,
        totalPeopleCount: state.peoplePage.totalPeopleCount,
        activePage: state.peoplePage.activePage
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
        },
        setPagesCount: (count) => {
            dispatch(SET_PAGES_COUNT_AC(count))
        },
        setActivePage: (value) => {
            dispatch(SET_ACTIVE_PAGE_AC(value))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleAPIContainer);