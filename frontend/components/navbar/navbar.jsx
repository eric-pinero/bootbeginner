import React from "react";
import { Link } from "react-router-dom"
import Dropdown from "./dropdown_container"

class Navbar extends React.Component{
    
    render() {
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
                    <Link className="nav-link" to="/explore">Explore</Link>
                    <Link className="nav-link" to="/projects/learn">Start a project</Link>
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