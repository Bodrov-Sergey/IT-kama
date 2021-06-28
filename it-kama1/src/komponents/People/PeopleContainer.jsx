import React from "react";
import PeopleAPIContainer from './PeopleAPIContainer'
import {connect} from "react-redux";
import {setActivePage, getUsers, follow, unfollow} from "../../redux/people-reducer";
import {
    getActivePage, getDisabled,
    getIsFetching,
    getPageSize,
    getPeopleData,
    getTotalPeopleCount
} from "../../redux/people-selectors";


let mapStateToProps = (state) => {
    return {
        peopleData: getPeopleData(state),
        pageSize: getPageSize(state),
        totalPeopleCount: getTotalPeopleCount(state),
        activePage: getActivePage(state),
        isFetching: getIsFetching(state),
        disabled: getDisabled(state)

    }
}

export default connect(mapStateToProps, {setActivePage, getUsers, follow, unfollow} )(PeopleAPIContainer);