import React from "react";
import PeopleAPIContainer from './PeopleAPIContainer'
import {connect} from "react-redux";
import {
    follow,
    setActivePage,
    setPagesCount,
    setPeople,
    toggleIsFetching,
    unfollow,
    toggleDisabled,
    getUsers, accessFollow, accessUnfollow
} from "../../redux/people-reducer";


let mapStateToProps = (state) => {
    return {
        peopleData: state.peoplePage.peopleData,
        pageSize: state.peoplePage.pageSize,
        totalPeopleCount: state.peoplePage.totalPeopleCount,
        activePage: state.peoplePage.activePage,
        isFetching: state.peoplePage.isFetching,
        disabled: state.peoplePage.disabled

    }
}

export default connect(mapStateToProps, {follow, unfollow, setPeople,
    setPagesCount, setActivePage, toggleIsFetching,
    toggleDisabled, getUsers, accessFollow, accessUnfollow} )(PeopleAPIContainer);