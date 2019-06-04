import React from 'react';
import { Link } from  'react-router-dom';

 class ProjectEditHeader extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <header>
                <nav className="left">
                    <Link to={`/projects/${this.props.project.id}/edit`}><h1>Bootbeginner</h1></Link>
                    <Link to={`/projects/${this.props.project.id}/edit/basics`}>Basics</Link>
                    <img></img>
                    <Link to={`/projects/${this.props.project.id}/edit/rewards`}>Rewards</Link>
                    <img></img>
                    <Link to={`/projects/${this.props.project.id}/edit/story`}>Story</Link>
                    <img></img>
                    <Link to={`/projects/${this.props.project.id}/edit/people`}>People</Link>
                    <img></img>
                    <Link to={`/projects/${this.props.project.id}/edit/payment`}>Payment</Link>
                </nav>
                <Link>Exit to Project Overview</Link>
            </header>
        )
    }
 }

 export default ProjectEditHeader;