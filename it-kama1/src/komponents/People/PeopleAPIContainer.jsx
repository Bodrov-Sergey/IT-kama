import React from "react";
import axios from "axios";
import People from "./People";





class PeopleAPIContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`).then(
            response=> {
                this.props.setPeople(response.data.items)
                this.props.setPagesCount(response.data.totalCount)
            }
        );
    }
    setActivePage = (value)=>{
        this.props.setActivePage(value);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${this.props.pageSize}`).then(
            response=> {
                this.props.setPeople(response.data.items);

            }
        );

    }
    setNextPage = () => {
        let pagesCount = Math.ceil(this.props.totalPeopleCount / this.props.pageSize);
        if (this.props.activePage == pagesCount){
            this.setActivePage(1);
        } else if (true){
            this.setActivePage(this.props.activePage+1);
        }
    }
    setPreviousPage = () => {
        let pagesCount = Math.ceil(this.props.totalPeopleCount / this.props.pageSize);
        if (this.props.activePage == 1){
            this.setActivePage(pagesCount);
        } else if (true){
            this.setActivePage(this.props.activePage-1);
        }
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalPeopleCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i);
        }
    return (
        <People peopleData={this.props.peopleData} pages={pages}  activePage={this.props. activePage} follow={this.props.follow} unfollow={this.props.unfollow}
                setActivePage={this.setActivePage}
                setPreviousPage={this.setPreviousPage}
                setNextPage={this.setNextPage}
        />
    )}
}
export default PeopleAPIContainer;