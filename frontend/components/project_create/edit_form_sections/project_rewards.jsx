import React from 'react';
import {Link} from 'react-router-dom';

class ProjectRewards extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const projectId = this.props.props.project.id;
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
                        <li><Link>People</Link></li>
                    </ul>
                    <Link to={`/projects/${projectId}/edit/overview`}>Exit to Project Overview</Link>
                </nav>
                <header>
                    <h1>Add your rewards</h1>
                    <p>
                        Offer simple, meaningful rewards that bring backers closer to your 
                        project. Rewards don’t have to be physical items. Consider special 
                        experiences or behind-the-scenes peeks into your project.
                    </p>
                </header>
                
                <section>
                    <div>
                        <div className="instructions">
                            <h2>Rewards</h2>
                            <span>It's good to provide a range of prices but not too many options.</span>
                        </div>
                        <button>+ Add a reward</button>
                    </div>
                    <ul>
                        <li>example</li>
                        <li>example</li>
                        <li>example</li>
                    </ul>
                </section>
                <footer>
                    <Link>Preview</Link>
                    {/* connect to show page once it is functional */}
                    <Link to={`/projects/${projectId}/edit/${this.props.next}`}>Next:{this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
                </footer>
            </content>
        )
    }
}

export default ProjectRewards;