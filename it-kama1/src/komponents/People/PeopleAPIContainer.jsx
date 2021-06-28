import React from "react";
import People from "./People";
import Preloader from "../common/Preloader/Preloader";
import s from "./People.module.css";
import searchIco from "../../Icons/search.svg";

class PeopleAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.pageSize);
    }

    setActivePage = (value) => {
        this.props.setActivePage(value);
        this.props.getUsers(value, this.props.pageSize);
    }
    setNextPage = () => {
        let pagesCount = Math.ceil(this.props.totalPeopleCount / this.props.pageSize);
        if (this.props.activePage == pagesCount) {
            this.setActivePage(1);
        } else if (true) {
            this.setActivePage(this.props.activePage + 1);
        }
    }
    setPreviousPage = () => {
        let pagesCount = Math.ceil(this.props.totalPeopleCount / this.props.pageSize);
        if (this.props.activePage == 1) {
            this.setActivePage(pagesCount);
        } else if (true) {
            this.setActivePage(this.props.activePage - 1);
        }
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalPeopleCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <section className={s.users}>
                <div className={s.searchPanel}>
                    <img src={searchIco} alt="searchIcon" className={s.searchPanel__icon}/>
                    <input className={s.searchPanel__input} placeholder={"name..."}/>
                    <button className={s.searchPanel__button}>Find</button>
                </div>
                <div className={s.localHeader}>
                    <h1 className={s.mainTitle}>Following</h1>
                    <span className={s.counter}>{this.props.peopleData.length}</span>
                </div>
                {this.props.isFetching ? <div className={s.preloaderContainer}><Preloader height={80}/></div> : null}
                <People peopleData={this.props.peopleData}
                        pages={pages}
                        activePage={this.props.activePage}
                        disabled={this.props.disabled}
                        setActivePage={this.setActivePage}
                        setPreviousPage={this.setPreviousPage}
                        setNextPage={this.setNextPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}

                />
            </section>
        )
    }
}

export default PeopleAPIContainer;