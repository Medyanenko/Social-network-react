import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode () {
        this.setState( //sеtState асинхронный
            {
                editMode: true
            }
        )
        this.state.editMode = true;
    }
    deactivateEditMode () {
        this.setState( 
            {
                editMode: false
            }
        )
        this.state.editMode = true;
    }
    render(){
    return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick = {this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }       
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
                </div>
            }
        </div>
        )
    }
}
export default ProfileStatus;