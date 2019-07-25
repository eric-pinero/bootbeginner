import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown_container";
import Searchbar from "../search/searchbar_container";

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showSearch : false,
        };
        this.showSearch = this.showSearch.bind(this);
    }

    showSearch(){
        this.setState({showSearch: !(this.state.showSearch)});
    }
    
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

        const nav_searchbar = this.state.showSearch ?
            <Searchbar close={this.showSearch}/>
            :
            <>
            <div className="nav-left">
                <Link className="nav-link" to="/explore">Explore</Link>
                <Link className="nav-link" to="/projects/learn">Start a project</Link>
            </div>

            <h1><Link to="/">Bootbeginner</Link></h1>

            <div className="nav-right">
                <div className="nav-link pointer" onClick={this.showSearch}>Search
                    <img src="https://img.icons8.com/ios-glyphs/26/000000/search.png"></img>
                </div>
                {signIn}
                {dropdown}
            </div>
            </>
        
        const shadow = this.state.showSearch ? "shadow" : ""

        return(
            <nav className={`nav-main ${shadow}`}>
                {nav_searchbar}
            </nav>
        )
    }
}

export default Navbar;