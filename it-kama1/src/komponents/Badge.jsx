import React from "react";
import s from './Badge.module.css';
import ava from '../Icons/Avatar.jpg'

const Badge = () => {
    return <section className={s.badge}>
        <img src={ava} className={s.ava}/>
        <div className={s.personal}>
            <h1 className={s.name}>Bodrov Sergey</h1>
            <div className={s.infoContainer}>
                <ul className={s.list}>
                    <li className={s.itemPoint}>Date of birth:</li>
                    <li className={s.itemPoint}>City:</li>
                    <li className={s.itemPoint}>Education:</li>
                    <li className={s.itemPoint}>Web Site:</li>
                </ul>
                <ul className={s.list}>
                    <li className={s.itemAnswer}>12.08.2002</li>
                    <li className={s.itemAnswer}>Moscow</li>
                    <li className={s.itemAnswer}>REU</li>
                    <li className={s.itemAnswer}><a href={"#"}>click</a></li>
                </ul>
            </div>
        </div>
    </section>

}

export default Badge;