import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
       // status: this.props.status
    }

    activateEditMode = ()=> {
        this.setState( //sеtState асинхронный
            {
                editMode: true
            }
        )    
    }
    deactivateEditMode = () => {
        this.setState({
                editMode: false
        });
        this.props.updateStatus();
    }
    render(){
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick = {this.activateEditMode}>{this.props.status}</span>
                </div>
            }       
            {this.state.editMode &&
                <div>
                    <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
                </div>
            }
        </div>
        )
    }
}
export default ProfileStatus;