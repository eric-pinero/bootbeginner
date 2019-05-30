import React from "react";
import { Link } from "react-router-dom"

class Navbar extends React.Component{
    render() {
        const logoutButton = this.props.loggedIn ? 
            <button onClick={() => dispatch(logout())}>Logout</button>
            :
            null
        ;

        const signIn = !this.props.loggedIn ?
            <Link to="/login">Sign in</Link>
            :
            null
        ;

        return(
            <nav className="nav-main">
                <div>
                    <Link to="/">Explore</Link>
                    <Link to="/">Start a Project</Link>
                </div>

                <h1>Bootbeginner</h1>

                <div>
                    <Link to="/">Search</Link>
                    {signIn}
                    {logoutButton}
                </div>

            </nav>
        )
    }
}

export default Navbar;