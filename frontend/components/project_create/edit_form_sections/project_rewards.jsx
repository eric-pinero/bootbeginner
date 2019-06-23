import React from 'react';
import {Link} from 'react-router-dom';

class ProjectRewards extends React.Component{
    constructor(props){
        super(props);
        this.editing = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: "",
            description: "",
            items:"",
            project_id: this.props.props.match.params.projectId,
            minimum_value: 0,
            quantity: null,
            start_time: null,
            end_time: null,
            rewardMenu: false,
        };
    }

    handleSubmit(){
        const {
            title, description, items, project_id, minimum_value,
            quantity, start_time, end_time,
        } = this.state;
        const reward = Object.assign({}, { title, description, items, project_id, minimum_value,
            quantity, start_time, end_time });
        this.props.props.createReward(reward);
        this.setState({rewardMenu : false});
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    render(){
        const project = this.props.props.project;
        const projectId = project.id;
        debugger
        const rewards = project.project_rewards;
        const footer = this.state.rewardMenu ?
            <>
            <button 
                className="grey-button" 
                onClick={() => this.setState({rewardMenu : false})}>
                    Cancel
            </button>
            <button className="green-button" onClick={this.handleSubmit}>Save</button>
            </>
            :
            <>
            <Link to={`/projects/${projectId}`} className="grey-button">Preview</Link>
            {/* connect to show page once it is functional */}
            <Link className="green-button" onClick={this.handleSubmit} to={`/projects/${projectId}/edit/${this.props.next}`}>Next: {this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
            </>
        ;

        const rewardMenu = this.state.rewardMenu ?
            <div>
            <h3>Add a reward</h3>
            <p>Offer tangible or intangible things that bring backers closer to your project.</p>
            <div className="reward-form">
                <form>
                    <h3>Title</h3>
                    <p>Briefly describe this reward</p>
                    <input 
                        type="text"
                        onChange={this.handleChange('title')}
                    />
                    
                    <h3>Pledge amount</h3>
                    <p>Set a minimum pledge amount for this reward.</p>
                    <div>$
                        <input 
                            type="number"
                            onChange={this.handleChange('minimum_value')} 
                        />
                    </div>

                    <h3>Description</h3>
                    <p>Describe this reward in more detail.</p>
                    <input type="text" onChange={this.handleChange('description')} />

                    <h3>Reward quantity</h3>
                    <p>
                        You may want to limit the quantity of this reward 
                        available to backers if production or shipping is difficult, 
                        time-consuming, or not scalable.
                    </p>
                    <div className="radio-box">
                        <input type="radio"/>Unlimited
                        <input type="radio"/>Limit availability
                        <div className="hidden">
                            <h3>Maximum number available</h3>
                            <input 
                                type="number"
                                onChange={this.handleChange('quantity')} 
                            />
                        </div>
                    </div>

                    <h3>Time Limit</h3>
                    <p>
                        Schedule the timing of this reward if you would 
                        like to garner excitement about limited editions 
                        or special offerings.
                    </p>
                    <div className="radio-box">
                        <input type="radio"/>No time limit
                        <input type="radio"/>Start/end on specific dates and times
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
        :
            null
        ;


        const reward1 = rewards[0] ?
            <>
            <div>
                <span>PLEDGE AMOUNT</span>
                <span>DETAILS</span>
                <span>INCLUDES</span>
            </div>

            <li className="reward-item solid dashed dark-grey-font">
                <div className="pledge">
                    <div class="column">
                       <span> ${rewards[0.minimum_value]}</span>
                    </div>
                    <div class="column">
                        <span> ${rewards[0.title]}</span>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div></div>
            </li>
            </>
            :
            <li className="sample reward-item grey-bg border dashed dark-grey-font">
                <span>+ Example: a copy of what you're making</span>
            </li>
        ;

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
                        <button className="black-button" 
                            onClick={() => this.setState({rewardMenu : true})}>
                            + Add a reward
                        </button>
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
                    {rewardMenu}
                </section>

{                <footer className="basic-footer">
                    {footer}                        
                </footer>
}            </content>
        )
    }
}

export default ProjectRewards;