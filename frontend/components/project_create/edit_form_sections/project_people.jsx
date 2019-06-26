import React from 'react';
import {Link} from 'react-router-dom';

class ProjectPeople extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.props.project;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleFinalSubmit(){
        this.setState({launched: true})
        const project = Object.assign({}, this.state)
        this.props.props.updateProject(project);
        // Add a history push to project show page
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    componentWillUnmount(){
        this.setState({errors: []});
    }


    render(){
        const projectId = this.state.id;
        return(
            <content>
                <nav>
                    <h1>Bootbeginner</h1>   
                    <ul>
                        <li><Link to={`/projects/${projectId}/edit/basics`}>Basics</Link></li>
                        <img/>
                        <li><Link to={`/projects/${projectId}/edit/rewards`}>Rewards</Link></li>
                        <img/>
                        <li><Link to={`/projects/${projectId}/edit/story`}>Story</Link></li>
                        <img/>
                        <li><Link to={`/projects/${projectId}/edit/people`}>People</Link></li>
                    </ul>
                    <Link to={`/projects/${projectId}/edit/overview`}>Exit to Project Overview</Link>
                </nav>

                <header>
                    <h1>Introduce yourself</h1>
                    <h2>Give backers an idea of who you are.</h2>
                </header>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Your profile</h3>
                        <p>This will appear on your project page and must include your name, photo, and biography.</p>
                    </div>
                    <div>
                        <img></img> 
                        {/* user profile picture */}
                        <div>
                            <h3>{this.props.props.user.username}</h3>
                            <span>Project creator</span>
                            <Link>Complete your profile</Link>
                            {/* Link to user edit page */}
                        </div>
                    </div>
                </section>



                <footer>
                <Link className="grey-button" to={`/projects/${this.state.id}`}>Preview</Link>
                    {/* connect to show page once it is functional */}
                    <Link onClick={this.handleFinalSubmit} to={`/projects/${projectId}/edit/${this.props.next}`}>Next:{this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
                </footer>
            </content>
        )
    }
}

export default ProjectPeople;
