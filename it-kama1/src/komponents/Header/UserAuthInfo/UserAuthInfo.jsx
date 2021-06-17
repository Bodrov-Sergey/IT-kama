import React from "react";
import s from "../Header.module.css";
import baseAva from "../../../Icons/Profile.svg";

class UserAuthInfo extends React.Component {
    state = {
        editMode: false,
    }
    toggleEditMode = () => {
        this.state.editMode? (
        this.setState({
            editMode: false
        })):(this.setState({
            editMode: true
        }));
    }
    render() {
        if (this.props.card){

            return <div className={s.userInfo} onClick={this.toggleEditMode}>
                <h2 className={s.fullName}>{this.props.card.fullName}</h2>
                <img className={s.userAva} src={this.props.card.photos.small? this.props.card.photos.small :baseAva}/>
                {this.state.editMode ? <div>
                    <div className={s.logout} onClick={this.props.logout}>Logout</div>
                </div>: <></>}
            </div>
        } else {
            return <></>
        }
    }
};
export default UserAuthInfo;
