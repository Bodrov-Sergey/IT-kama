import React, {useEffect, useState} from "react";
import s from '../Badge.module.css';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = ()=>{
        setEditMode(true)
    }
    const deactivateEditMode=()=>{
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }
    useEffect(()=>{setStatus(props.status)},[props.status])

    if (props.isOwner) {
        return (
            <section>
                {editMode?
                    <div>
                        <input autoFocus={true} onBlur={deactivateEditMode} className={s.inputStatus}
                               value={status} onChange={onStatusChange}/>
                    </div>
                    :
                    <div>
                        <p onClick={activateEditMode} className={s.myStatus}>{props.status}</p>
                    </div>
                }
            </section>
        )
    } else{
        return (
            <div>
                <p onClick={activateEditMode} className={s.status}>{props.status}</p>
            </div>
        )
    }

}

export default ProfileStatus;