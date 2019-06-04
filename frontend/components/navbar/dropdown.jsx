import React from "react";
import { Link } from "react-router-dom"

class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            display: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown(){
        this.setState({display: !(this.state.display)})
    }


    render() {
        const dropdown = this.state.display ? 
            <>
            <div onBlur={this.toggleDropdown} className="dropdown-menu" tabIndex="0">
                <content>
                <div className="dropdown-section">
                    <h2>YOUR ACCOUNT</h2>
                    <ul className="account-options">
                        <li className="link">Saved Projects</li>
                        <li className="link">Recommended for You</li>
                        <li className="link">Following</li>
                    </ul>
                    <div id="space"/>
                    <ul className="account-options">
                        <li className="link">Profile</li>
                        <li className="link">Settings</li>
                        <li className="link">Messages</li>
                        <li className="link">Activity</li>
                    </ul>
                </div>

                <div className="dropdown-section">
                    <h2>BACKED PROJECTS</h2>
                    <ul>
                        <li className="link">Project 1</li>
                    </ul>
                </div>

                <div className="dropdown-section">
                    <h2>CREATED PROJECTS</h2>
                    <ul>
                        <li className="link">Project 1</li>
                    </ul>
                </div>
                </content>
            <div className="grey-line"/>
            <button className="link" onClick={() => dispatch(logout())}>Logout</button>
            </div>
            </>
            :
            null
        ;


        return(
        <div className="dropdown">
            <h1 className="link" onClick={this.toggleDropdown}>Dropdown</h1>
            {dropdown}
        </div>
        )
    }
}

export default Dropdown
