import React from 'react';
import { Link } from  'react-router-dom';

 class ProjectHeader extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <header>
                <nav className="left">
                    <Link><h1>Bootbeginner</h1></Link>
                    <Link>Basics</Link>
                    <img></img>
                </nav>
            </header>
        )
    }
 }

 export default ProjectHeader;