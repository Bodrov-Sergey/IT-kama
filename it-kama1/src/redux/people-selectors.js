export const getPeopleData = (state)=> {
    return state.peoplePage.peopleData;
}
export const getPageSize = (state)=> {
    return state.peoplePage.pageSize;
}
export const getTotalPeopleCount = (state)=> {
    return state.peoplePage.totalPeopleCount;
}
export const getActivePage = (state)=> {
    return state.peoplePage.activePage;
}
export const getIsFetching = (state)=> {
    return state.peoplePage.isFetching;
}
export const getDisabled = (state)=> {
    return state.peoplePage.disabled;
}
