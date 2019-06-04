import React from 'react';
import {Link} from 'react-router-dom';

class ProjectStory extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.props.project;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(){
        const project = Object.assign({}, this.state)
        this.props.props.updateProject(project);
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        }
    }

    render(){
        const projectId = this.state.id;
        return (
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
                    <h1>Introduce your project</h1>
                    <h2>Tell people why they should be excited about your project. Get specific but be clear and be brief.</h2>
                </header>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Project description</h3>
                        <p>
                            Describe what you're raising funds to do, why you care about it, how you 
                            plan to make it happen, and who you are. Your description should tell 
                            backers everything they need to know. If possible, include images to 
                            show them what your project is all about and what rewards look 
                            like.
                        </p>
                    </div>
                    <textarea
                        onChange={this.handleChange('risks')} 
                        value={this.state.risks}
                        placeholder="Write about your project like you're explaining it to a friend"
                    />
                </section>

                <section className="basic-section">
                    <div className="instructions">
                        <h3>Risks and challenges</h3>
                        <p>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it.</p>
                    </div>

                    <div className="fields">
                        <div>
                            <textarea 
                                onChange={this.handleChange('risks')}
                                value={this.state.risks}
                                placeholder="Common risks and challenges that you many want to address include budgeting, 
                                timelines for rewards and the project itself, the size of your audience"
                            />
                        </div>
                    </div>
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

export default ProjectStory;