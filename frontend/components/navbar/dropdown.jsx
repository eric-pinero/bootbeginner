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
            <div className="dropdown-menu">
                <content>
                <div className="dropdown-section">
                    <h2>YOUR ACCOUNT</h2>
                    <ul className="account-options">
                        <li>Saved Projects</li>
                        <li>Recommended for You</li>
                        <li>Following</li>
                    </ul>
                    <div id="space"/>
                    <ul className="account-options">
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Messages</li>
                        <li>Activity</li>
                    </ul>
                </div>

                <div className="dropdown-section">
                    <h2>BACKED PROJECTS</h2>
                    <ul>
                        <li>Project 1</li>
                    </ul>
                </div>

                <div className="dropdown-section">
                    <h2>CREATED PROJECTS</h2>
                    <ul>
                        <li>Project 1</li>
                    </ul>
                </div>
                </content>
            <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
            </>
            :
            null
        ;


        return(
        <div className="dropdown">
            <h1 onClick={this.toggleDropdown}>Dropdown</h1>
            {dropdown}
        </div>
        )
    }
}

export default Dropdown
