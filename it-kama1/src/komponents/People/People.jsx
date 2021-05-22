import React from "react";
import s from "./People.module.css";
import searchIco from "../../Icons/search.svg";
import baseAva from "../../Icons/Profile.svg";
import {NavLink} from "react-router-dom";
import leftArrow from "../../Icons/left-arrow.svg";
import rightArrow from "../../Icons/right-arrow.svg";

const People = (props) => {
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
            <div className={s.following}>
                {
                    props.peopleData.map(u => <div key={u.id} className={s.userSection}>
                        <img src={u.photos.small == null ? baseAva : u.photos.small} alt="ava" className={s.ava}/>
                        <div className={s.userInfoCont}>
                            <h2 className={s.userName}>{u.name}</h2>
                            <p className={s.status}>{u.status}</p>
                            <NavLink to={"/"}>Open dialog</NavLink>
                        </div>
                        <div className={s.buttonCont}>
                            {u.followed
                                ? <button className={s.actionButtonUnfollow} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }} className={s.actionButtonFollow}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
            <div className={s.pagesControl}>
                <button className={s.pageButton} onClick={() => {
                    props.setActivePage(1);
                    window.scrollTo(0, 0)
                }}>1
                </button>
                <div className={s.activePageCont}>
                    <img src={leftArrow} className={s.arrow} onClick={() => {
                        props.setPreviousPage();
                        window.scrollTo(0, 0)
                    }}/>
                    <button className={s.pageButton}>{props.activePage}</button>
                    <img src={rightArrow} className={s.arrow} onClick={() => {
                        props.setNextPage();
                        window.scrollTo(0, 0)
                    }}/>
                </div>
                <button className={s.pageButton} onClick={() => {
                    props.setActivePage(props.pages.length);
                    window.scrollTo(0, 0)
                }}>{props.pages.length}</button>
            </div>

        </section>

    )
}
export default People;