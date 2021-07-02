import React from "react";
import s from "./../Badge.module.css"
import {Field, reduxForm} from "redux-form";
import {Input, TextareaProfileInfo} from "../../../common/FormsControls/FormsControls";
import Button from "../../../common/Button/Button";

const ContactInfo = (props) => {


    return <form onSubmit={props.handleSubmit} className={s.infoContainer}>
        <div className={s.contactContainer}>
        <Field className={s.itemInput} placeholder={"Full Name"} component={Input} name={"fullName"}/>
        </div>
        {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactLabel={key}/>
        })}
        <div className={s.contactContainer}>
            <div className={s.itemPoint}>Are you looking for a job?</div>
            <div className={s.itemPoint}>
                <Field className={s.checkboxProfileInfo} component={"input"} type={"checkbox"} name={"lookingForAJob"}/>
                <span className={s.checkboxDescription}>Yes</span>
            </div>
        </div>

        <div className={s.contactContainer}>
            <div className={s.itemPoint}>Job looking status:</div>
            <Field className={s.itemInput} placeholder={"Job looking status"} component={Input}
                   name={"lookingForAJobDescription"}/>
        </div>
        <div className={s.aboutMeLabel}>About me:</div>
        <Field placeholder={"aboutMe"} className={s.aboutMeTextarea} component={TextareaProfileInfo} name={"aboutMe"}/>
        <div className={s.buttonSubmitContainer}><Button value={"Save"}/></div>
        <div className={s.errorMessage}>
            {props.error? props.error: ""}
        </div>
    </form>

}

const Contact = ({contactLabel}) => {
    return <div className={s.contactContainer}>
        <div className={s.itemPoint}>{contactLabel+":"}</div>
        <Field className={s.itemInput} placeholder={contactLabel} component={Input} name={"contacts." + contactLabel}/>
    </div>
}

export const ContactInfoForm = reduxForm({form: "contactInfo"})(ContactInfo)