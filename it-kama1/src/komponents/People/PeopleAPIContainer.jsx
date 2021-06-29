import React, {useEffect} from "react";
import People from "./People";
import Preloader from "../common/Preloader/Preloader";
import s from "./People.module.css";
import searchIco from "../../Icons/search.svg";

const PeopleAPIContainer = (props) => {
    useEffect(()=>{props.getUsers(props.activePage, props.pageSize)},[props.activePage, props.pageSize])
    const setActivePage = (value) => {
        props.setActivePage(value);
        props.getUsers(value, props.pageSize);
    }
    const setNextPage = () => {
        let pagesCount = Math.ceil(props.totalPeopleCount / props.pageSize);
        if (props.activePage == pagesCount) {
            setActivePage(1);
        } else if (true) {
            setActivePage(props.activePage + 1);
        }
    }
    const setPreviousPage = () => {
        let pagesCount = Math.ceil(props.totalPeopleCount / props.pageSize);
        if (props.activePage == 1) {
            setActivePage(pagesCount);
        } else {
            setActivePage(props.activePage - 1);
        }
    }
    let pagesCount = Math.ceil(props.totalPeopleCount / props.pageSize);
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
                <span className={s.counter}>{props.peopleData.length}</span>
            </div>
            {props.isFetching ? <div className={s.preloaderContainer}><Preloader height={80}/></div> : null}
            <People peopleData={props.peopleData}
                    pages={pages}
                    activePage={props.activePage}
                    disabled={props.disabled}
                    setActivePage={setActivePage}
                    setPreviousPage={setPreviousPage}
                    setNextPage={setNextPage}
                    follow={props.follow}
                    unfollow={props.unfollow}

            />
        </section>
    )

}

export default PeopleAPIContainer;