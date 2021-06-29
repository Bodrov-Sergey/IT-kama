import React, {useState} from "react";
import s from "../Header.module.css";
import baseAva from "../../../Icons/Profile.svg";

const UserAuthInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => {
        editMode ? setEditMode(false) : setEditMode(true);
    }

    if (props.card) {
        return <div className={s.userInfo} onClick={toggleEditMode}>
            <h2 className={s.fullName}>{props.card.fullName}</h2>
            <img className={s.userAva} src={props.card.photos.small ? props.card.photos.small : baseAva}/>
            {editMode ? <div>
                <div className={s.logout} onClick={props.logout}>Logout</div>
            </div> : <></>}
        </div>
    } else {
        return <></>
    }
};
export default UserAuthInfo;
