import React, {useState} from "react";
import s from './Badge.module.css';
import Preloader from "../../common/Preloader/Preloader";
import baseAva from '../../../Icons/Profile.svg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {toggleContactsEditMode} from "../../../redux/profile-reducer";
import {ContactInfoForm} from "./ContactInfo/ContactInfo";

const Badge =React.memo((props) => {
    window.scrollTo(0, 0)

    const onAvaSelected = (e)=>{
        e.target.files.length && props.uploadAvatar(e.target.files[0]);
    }

    const toggleEditMode = ()=>{
        props.toggleContactsEditMode(!props.contactsEditMode)
    }


    const httpConcater = (profile, key)=>{
        return  profile.contacts[key][0]+profile.contacts[key][1]+profile.contacts[key][2]!="htt"?
            "http://"+profile.contacts[key]:profile.contacts[key]
    }

    if (!props.isFetching && props.profile) {

        return <section className={s.badge}>
            <div className={s.avaContainer}><img src={props.profile.photos.large || baseAva} className={s.ava}/>
            {props.isOwner && props.contactsEditMode && <div><label htmlFor={"avaUploader"} className={s.addAvaLabel}>Add new avatar</label><input className={s.addAva}  id={"avaUploader"} type={"file"} onChange={onAvaSelected}/>
                </div>}</div>

            <div className={s.personal}>
                {!props.contactsEditMode && <h1 className={s.name}>{props.profile.fullName}</h1>}
                <ProfileStatus isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} />
                {!props.contactsEditMode?
                <div className={s.infoContainer}>
                        {Object.keys(props.profile.contacts).filter(key=>{return props.profile.contacts[key] && key })
                            .map(key=>{
                            return <Contact contactTitle={key} contactValue={httpConcater(props.profile, key)}  key={key} />
                        })}
                    <ul className={s.contactContainer}>
                        <li className={s.itemPoint}>Job looking status:</li>
                        <li className={s.itemPoint}>{props.profile.lookingForAJobDescription || "Not looking for a job"}</li>
                    </ul>
                    {props.profile.aboutMe && <ul className={s.aboutMeContainer}>
                        <li className={s.aboutMeItem}>About me:</li>
                        <div className={s.aboutMeItem}>{props.profile.aboutMe}</div>
                    </ul>}


                </div>: <ContactInfoForm initialValues={props.profile} profile={props.profile} onSubmit={props.onSubmitContacts}/>}
                {props.isOwner && !props.contactsEditMode && <div className={s.changeProfileButton} onClick={toggleEditMode}>Change profile</div>}
            </div>
        </section>
    } else {
        return <div className={s.preloaderContainer}><Preloader height={90}/></div>
    }

})
const Contact = ({contactTitle, contactValue})=>{
    return<ul className={s.contactContainer}> <li className={s.itemPoint}>{contactTitle+":"}</li>
        <li className={s.itemPoint}><a className={s.links} href={contactValue} target={"_blank"}>click</a> </li></ul>

}



export default Badge;