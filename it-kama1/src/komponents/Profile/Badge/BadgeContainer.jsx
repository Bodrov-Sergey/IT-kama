import React from "react";
import Badge from "./Badge";
import {connect} from "react-redux";
import {
    toggleContactsEditMode,
    updateContactInfo,
    updateStatus,
    uploadAvatar
} from "../../../redux/profile-reducer";

const BadgeContainer = (props) => {
    const onSubmitContacts = (formData)=>{
        props.updateContactInfo(formData);
    }

    return <Badge contactsEditMode={props.contactsEditMode}
                  toggleContactsEditMode={props.toggleContactsEditMode}
                  uploadAvatar={props.uploadAvatar}
                  profile={props.profile}
                  isOwner={props.isOwner}
                  isFetching={props.isFetching}
                  status={props.status}
                  updateStatus={props.updateStatus}
                  onSubmitContacts={onSubmitContacts}
    />
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    contactsEditMode: state.profilePage.contactsEditMode
})

export default connect(mapStateToProps, {
    updateStatus, uploadAvatar, toggleContactsEditMode, updateContactInfo
})(BadgeContainer)