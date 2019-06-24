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
            estimated_month: "default",
            estimated_year: "default",
        };
    }

    handleSubmit(){
        const {
            title, description, items, project_id, minimum_value,
            quantity, start_time, end_time, estimated_month, estimated_year
        } = this.state;
        const reward = Object.assign({}, { title, description, items, project_id, minimum_value,
            quantity, start_time, end_time, estimated_month, estimated_year });
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

                    <h3>Estimated Delivery</h3>
                    <p>Give yourself plenty of time. It's better to deliver to backers 
                    ahead of schedule than behind.</p>
                    <div className="month year">
                        <select 
                            value={this.state.estimated_month} 
                            onChange={this.handleChange('estimated_month')}
                        >
                            <option value="default" disabled></option>
                            <option value="january">January</option>
                            <option value="february">February</option>
                            <option value="march">March</option>
                            <option value="april">April</option>
                            <option value="may">May</option>
                            <option value="june">June</option>
                            <option value="july">July</option>
                            <option value="august">August</option>
                            <option value="september">September</option>
                            <option value="november">November</option>
                            <option value="december">December</option>
                        </select>

                        <select 
                            value={this.state.estimated_year} 
                            onChange={this.handleChange('estimated_year')}
                        >
                            <option value="default" disabled></option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>

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

        const reward1 = rewards ?
            <>
            <div>
                <span>PLEDGE AMOUNT</span>
                <span>DETAILS</span>
                <span>INCLUDES</span>
            </div>

            <li className="reward-item solid dashed dark-grey-font">
                <div className="pledge">
                    <div class="column">
                       <span> ${rewards[0].minimum_value}</span>
                    </div>
                    <div class="column">
                        <span> {rewards[0].title}</span>
                        <span> 
                            Estimated Delivery: {rewards[0].estimated_month} {rewards[0].estimated_year}
                        </span>
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


        const reward2 = rewards && rewards[1] ?
            <>
            <div>
                <span>PLEDGE AMOUNT</span>
                <span>DETAILS</span>
                <span>INCLUDES</span>
            </div>

            <li className="reward-item solid dashed dark-grey-font">
                <div className="pledge">
                    <div class="column">
                       <span> ${rewards[1].minimum_value}</span>
                    </div>
                    <div class="column">
                        <span> {rewards[1].title}</span>
                        <span> 
                            Estimated Delivery: {rewards[1].estimated_month} {rewards[1].estimated_year}
                        </span>
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

        const reward3 = rewards && rewards[2] ?
            <>
            <div>
                <span>PLEDGE AMOUNT</span>
                <span>DETAILS</span>
                <span>INCLUDES</span>
            </div>

            <li className="reward-item solid dashed dark-grey-font">
                <div className="pledge">
                    <div class="column">
                       <span> ${rewards[2].minimum_value}</span>
                    </div>
                    <div class="column">
                        <span> {rewards[2].title}</span>
                        <span> 
                            Estimated Delivery: {rewards[2].estimated_month} {rewards[2].estimated_year}
                        </span>
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
                        {reward1}
                        {reward2}
                        {reward3}
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