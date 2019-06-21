import React from 'react';
import {Link} from 'react-router-dom';

class ProjectRewards extends React.Component{
    constructor(props){
        super(props);
        this.editing = false;
    }

    render(){
        const projectId = this.props.props.project.id;

        const footer = this.editing ?
            <>
            <button className="grey-button">Cancel</button>
            <button className="green-button" onClick={this.handleSubmit}>Save</button>
            </>
            :
            <>
            <Link to={`/projects/${projectId}`} className="grey-button">Preview</Link>
            {/* connect to show page once it is functional */}
            <Link className="green-button" onClick={this.handleSubmit} to={`/projects/${projectId}/edit/${this.props.next}`}>Next: {this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
            </>
            
        // const reward1 = this.props.props.project.rewards[0] ?
        //     <p>First Reward here</p>
        //     :
        //     <li className="sample reward-item grey-bg border dashed dark-grey-font">
        //         <span>+ Example: a copy of what you're making</span>
        //     </li>
        // ;


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
                            {/* <li><Link to={`/projects/${projectId}/edit/people`}>People</Link></li> */}
                        </ul>
                    </div>
                    <Link to={`/projects/${projectId}/edit/overview`}>Exit to Project Overview</Link>
                </nav>
                
                <header className="basic-section-header">
                    <h1>Add your rewards</h1>
                    <h2 className="width-75">
                        Offer simple, meaningful rewards that bring backers closer to your 
                        project. Rewards don’t have to be physical items. Consider special 
                        experiences or behind-the-scenes peeks into your project.
                    </h2>
                </header>
                
                <section className="rewards-area width-75 footer-offset">
                    <div className="reward-header width-100">
                        <div className="rewards">
                            <h3>Rewards</h3>
                            <p>It's good to provide a range of prices but not too many options.</p>
                        </div>
                        <button className="black-button">+ Add a reward</button>
                    </div>
                    <ul className="reward-list width-100">
                        <li className="sample reward-item grey-bg border dashed dark-grey-font">
                            <span>+ Example: a copy of what you're making</span>
                        </li>
                        <li className="sample reward-item grey-bg border dashed dark-grey-font">
                            <span>+ Example: a behind-the-scenes peek in writing, photos, or video</span>
                        </li>
                        <li className="sample reward-item grey-bg border dashed dark-grey-font">
                            <span>+ Example: an exclusive experience or object</span>
                        </li>
                    </ul>

                    <div className="hidden">
                        <h3>Add a reward</h3>
                        <p>Offer tangible or intangible things that bring backers closer to your project.</p>
                        <div className="reward-form">
                            <form>
                                <h3>Title</h3>
                                <p>Briefly describe this reward</p>
                                <input type="text"></input>
                                
                                <h3>Pledge amount</h3>
                                <p>Set a minimum pledge amount for this reward.</p>
                                <input type="number"><div>$</div></input>

                                <h3>Description</h3>
                                <p>Describe this reward in more detail.</p>
                                <textarea></textarea>

                                <h3>Reward quantity</h3>
                                <p>
                                    You may want to limit the quantity of this reward 
                                    available to backers if production or shipping is difficult, 
                                    time-consuming, or not scalable.
                                </p>
                                <div className="radio-box">
                                    <input type="radio">Unlimited</input>
                                    <input type="radio">Limit availability</input>
                                    <div className="hidden">
                                        <h3>Maximum number available</h3>
                                        <input type="number"></input>
                                    </div>
                                </div>

                                <h3>Time Limit</h3>
                                <p>
                                    Schedule the timing of this reward if you would 
                                    like to garner excitement about limited editions 
                                    or special offerings.
                                </p>
                                <div className="radio-box">
                                    <input type="radio">No time limit</input>
                                    <input type="radio">Start/end on specific dates and times</input>
                                    <input type="number" className="hidden quantity"></input>
                                </div>

                                <label>
                                <input></input>
                                </label>
                                <label>
                                <input></input>
                                </label>
                                <label>
                                <input></input>
                                </label>
                            </form>

                            <aside className="preview">

                            </aside>
                        </div>

                    </div>
                </section>

                <footer className="basic-footer">
                    <Link to={`/projects/${projectId}`} className="grey-button">Preview</Link>
                    {/* connect to show page once it is functional */}
                    <Link className="green-button" onClick={this.handleSubmit} to={`/projects/${projectId}/edit/${this.props.next}`}>Next: {this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
                </footer>
            </content>
        )
    }
}

export default ProjectRewards;