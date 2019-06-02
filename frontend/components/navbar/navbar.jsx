import React from "react";
import { Link } from "react-router-dom"
import Dropdown from "./dropdown"

class Navbar extends React.Component{
    
    displayDropdown(){
        return <Dropdown/>
    }

    render() {
        const logoutButton = this.props.loggedIn ? 
            <button onClick={this.displayDropdown} id="dropbtn">Dropdown</button>
            :
            null
        ;

        const signIn = !this.props.loggedIn ?
            <Link className="nav-link" to="/login">Sign in</Link>
            :
            null
        ;

        const dropdown = this.props.loggedIn ?
            <Dropdown/>
            :
            null
        ;

        return(
            <nav className="nav-main">
                <div className="nav-left">
                    <Link className="nav-link" to="/">Explore</Link>
                    <Link className="nav-link" to="/project-learn">Start a project</Link>
                </div>

                <h1><Link to="/">Bootbeginner</Link></h1>

                <div className="nav-right">
                    <Link className="nav-link" to="/">Search
                    <img src="https://img.icons8.com/ios-glyphs/26/000000/search.png"></img>
                    </Link>
                    {signIn}
                    {dropdown}
                </div>

            </nav>
        )
    }
}

export default Navbar;