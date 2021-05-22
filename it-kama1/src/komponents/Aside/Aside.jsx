import React from "react";
import profileImage from '../../Icons/Profile.svg';
import messageImage from '../../Icons/Message.svg';
import newsImage from '../../Icons/News.svg';
import settingsImage from '../../Icons/Settings.svg';
import musicImage from '../../Icons/Music.svg';
import peopleImage from '../../Icons/People.svg';

import s from './Aside.module.css';
import {NavLink} from "react-router-dom";



const Aside = () => {
    return <aside className={s.sidebar}>
        <nav>
            <ul>
                <li className={s.item}><NavLink className={s.link} to={"/profile"}><img src={profileImage} className={s.ico}/><span className={s.title}>Profile</span></NavLink></li>
                <li className={s.item}><NavLink className={s.link} to={"/messages"}><img src={messageImage} className={s.ico}/><span className={s.title}>Messages</span></NavLink></li>
                <li className={s.item}><NavLink className={s.link} to={"/news"}><img src={newsImage} className={s.ico}/><span className={s.title}>News</span></NavLink></li>
                <li className={s.item}><NavLink className={s.link} to={"/people"}><img src={peopleImage} className={s.ico}/><span className={s.title}>People</span></NavLink></li>
                <li className={s.item}><NavLink className={s.link} to={"/music"}><img src={musicImage} className={s.ico}/><span className={s.title}>Music</span></NavLink></li>
                <li className={s.item}><NavLink className={s.link} to={"/settings"}><img src={settingsImage} className={s.ico}/><span className={s.title}>Settings</span></NavLink></li>
            </ul>
        </nav>
    </aside>

}
export default Aside;
