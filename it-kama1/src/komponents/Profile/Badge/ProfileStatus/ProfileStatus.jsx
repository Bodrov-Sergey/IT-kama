import React from "react";
import s from '../Badge.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status != this.props.status){
            this.setState({
                state: this.props.status
            });
        }
    }

    render() {
        return (
            <section>
                {this.state.editMode ?
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} className={s.inputStatus}
                               value={this.state.status} onChange={this.onStatusChange}/>
                    </div>
                    :
                    <div>
                        <p onClick={this.activateEditMode} className={s.status}>{this.props.status}</p>
                    </div>
                }
            </section>
        )
    }

}

export default ProfileStatus;