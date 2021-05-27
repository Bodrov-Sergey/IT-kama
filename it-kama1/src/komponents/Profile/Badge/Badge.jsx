import React from "react";
import s from './Badge.module.css';
import Preloader from "../../common/Preloader/Preloader";
import baseAva from '../../../Icons/Profile.svg'

const Badge = (props) => {
    window.scrollTo(0, 0)
    if (!props.isFetching && props.profile) {

        return <section className={s.badge}>
            <img src={props.profile.photos.large ? props.profile.photos.large :baseAva} className={s.ava}/>
            <div className={s.personal}>
                <h1 className={s.name}>{props.profile.fullName}</h1>
                <h2 className={s.status}>{props.profile.aboutMe}</h2>
                <div className={s.infoContainer}>
                    <ul className={s.list}>
                        {props.profile.contacts.facebook?  <li className={s.itemPoint}>facebook:</li>: null}
                        {props.profile.contacts.vk?  <li className={s.itemPoint}>vk:</li>: null}
                        {props.profile.contacts.twitter?  <li className={s.itemPoint}>twitter:</li>: null}
                        {props.profile.contacts.instagram?  <li className={s.itemPoint}>instagram:</li>: null}
                        {props.profile.contacts.youtube?  <li className={s.itemPoint}>youtube:</li>: null}
                        {props.profile.contacts.github?  <li className={s.itemPoint}>github:</li>: null}
                        {props.profile.contacts.mainLink?  <li className={s.itemPoint}>mainLink:</li>: null}
                        {props.profile.lookingForAJob ?  <li className={s.itemPoint}>Job looking status:</li>: null}

                    </ul>
                    <ul className={s.list}>
                        {props.profile.contacts.facebook?  <li className={s.itemPoint}><a className={s.links} href={props.profile.contacts.facebook}>click</a> </li>: null}
                        {props.profile.contacts.vk?  <li className={s.itemPoint}><a className={s.links}  href={props.profile.contacts.vk}>click</a> </li>: null}
                        {props.profile.contacts.twitter?  <li className={s.itemPoint}><a className={s.links} href={props.profile.contacts.twitter}>click</a> </li>: null}
                        {props.profile.contacts.instagram?  <li className={s.itemPoint}><a className={s.links} href={props.profile.contacts.instagram}>click</a> </li>: null}
                        {props.profile.contacts.youtube?  <li className={s.itemPoint}><a className={s.links} href={props.profile.contacts.youtube}>click</a> </li>: null}
                        {props.profile.contacts.github?  <li className={s.itemPoint}><a className={s.links} href={props.profile.contacts.github}>click</a> </li>: null}
                        {props.profile.contacts.mainLink?  <li className={s.itemPoint}><a className={s.links} href={props.profile.contacts.mainLink}>click</a> </li>: null}
                        {props.profile.lookingForAJob?  <p>{props.profile.lookingForAJobDescription}</p>: null}

                    </ul>
                </div>
                <div>
                </div>
            </div>
        </section>
    } else {
        return <div className={s.preloaderContainer}><Preloader height={90}/></div>
    }

}

export default Badge;