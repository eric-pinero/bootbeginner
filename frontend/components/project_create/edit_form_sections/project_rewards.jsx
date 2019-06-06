import React from 'react';
import {Link} from 'react-router-dom';

class ProjectRewards extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const projectId = this.props.props.project.id;
        return(
            <content className="project-edit-section">
                <nav className="grey-bottom edit-nav">
                    <div className="edit-nav-left">
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
                    </div>
                    <Link to={`/projects/${projectId}/edit/overview`}>Exit to Project Overview</Link>
                </nav>
                
                <header className="basic-section-header">
                    <h1>Add your rewards</h1>
                    <h2>
                        Offer simple, meaningful rewards that bring backers closer to your 
                        project. Rewards don’t have to be physical items. Consider special 
                        experiences or behind-the-scenes peeks into your project.
                    </h2>
                </header>
                
                <section className="rewards-area footer-offset">
                    <div className="row">
                        <div className="rewards">
                            <h3>Rewards</h3>
                            <p>It's good to provide a range of prices but not too many options.</p>
                        </div>
                        <button>+ Add a reward</button>
                    </div>
                    <ul className="reward-list">
                    </ul>
                </section>

                <footer className="basic-footer">
                    <Link className="grey-button">Preview</Link>
                    {/* connect to show page once it is functional */}
                    <Link className="green-button" onClick={this.handleSubmit} to={`/projects/${projectId}/edit/${this.props.next}`}>Next: {this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
                </footer>
            </content>
        )
    }
}

export default ProjectRewards;