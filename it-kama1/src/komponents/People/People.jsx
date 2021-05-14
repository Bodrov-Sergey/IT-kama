import React from "react";
import s from './People.module.css'
import ava from "../../Icons/Avatar.jpg";
import {NavLink} from "react-router-dom";

const People = (props) => {
    return (
        <section className={s.users}>
            <div className={s.searchPanel}>
                <img src={ava} alt="searchIcon" className={s.searchPanel__icon}/>
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
                        <img src={ava} alt="ava" className={s.ava}/>
                        <div className={s.userInfoCont}>
                            <h2 className={s.userName}>{u.name}</h2>
                            <p className={s.status}>{u.status}</p>
                            <NavLink to={"/"}>Open dialog</NavLink>
                        </div>
                        <div className={s.buttonCont}>
                            { u.followed
                                ? <button className={s.actionButtonUnfollow} onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)} } className={s.actionButtonFollow}>Follow</button> }
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}
export default People;