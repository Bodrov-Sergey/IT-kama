import React from "react";
import profileImage from '../../Icons/Profile.svg';
import messageImage from '../../Icons/Message.svg';
import newsImage from '../../Icons/News.svg';
import settingsImage from '../../Icons/Settings.svg';
import musicImage from '../../Icons/Music.svg';
import s from './Aside.module.css'


const Aside = () => {
    return <aside className={s.sidebar}>
        <nav>
            <ul>
                <li className={s.item}><a className={s.link} href={"#"}><img src={profileImage} className={s.ico}/><span className={s.title}>Profile</span></a></li>
                <li className={s.item}><a className={s.link} href={"#"}><img src={messageImage} className={s.ico}/><span className={s.title}>Messages</span></a></li>
                <li className={s.item}><a className={s.link} href={"#"}><img src={newsImage} className={s.ico}/><span className={s.title}>News</span></a></li>
                <li className={s.item}><a className={s.link} href={"#"}><img src={musicImage} className={s.ico}/><span className={s.title}>Music</span></a></li>
                <li className={s.item}><a className={s.link} href={"#"}><img src={settingsImage} className={s.ico}/><span className={s.title}>Settings</span></a></li>
            </ul>
        </nav>
    </aside>

}
export default Aside;
