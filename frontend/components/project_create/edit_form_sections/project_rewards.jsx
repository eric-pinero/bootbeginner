import React from 'react';
import {Link} from 'react-router-dom';

class ProjectRewards extends React.Component{
    constructor(props){
        super(props);
        this.editing = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRewardSubmit = this.handleRewardSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: "",
            description: "",
            items:"",
            project_id: this.props.props.match.params.projectId,
            minimum_value: 0,
            quantity: "",
            start_time: "",
            end_time: "",
            rewardMenu: false,
            estimated_month: "default",
            estimated_year: "default",
        };
    }

    handleSubmit(){
        const project = this.props.props.project;
        this.props.props.updateProject(project, project.id);
    }


    handleRewardSubmit(){
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

    componentWillUnmount(){
        this.setState({errors: []});
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
            <button className="green-button" onClick={this.handleRewardSubmit}>Save</button>
            </>
            :
            <>
            <Link to={`/projects/${projectId}`} className="grey-button">Preview</Link>
            {/* connect to show page once it is functional */}
            <Link className="green-button" to={`/projects/${projectId}/edit/${this.props.next}`}>Next: {this.props.next[0].toUpperCase() + this.props.next.slice(1)}</Link>
            </>
        ;

        const rewardMenu = this.state.rewardMenu ?
            <div>
                <div className="flex-column margin-bottom-72 margin-top-24 line-height-16">
                    <h3 className="near-black-font font-18 line-height-16">Add a reward</h3>
                    <p className="dark-grey-font font-14 line-height-16">
                        Offer tangible or intangible things that bring backers closer to your project.
                    </p>
                </div>
            <div className="reward-form">
                <form>
                    <div className="line-height-24 padding-bottom-72 flex-column grey-bottom margin-top-24">
                    
                        <h3>Title</h3>
                        <p className="dark-grey-font font-14 margin-bottom-12">Briefly describe this reward</p>
                        <input 
                            type="text"
                            onChange={this.handleChange('title')}
                            placeholder="Signed Limited Edition"
                            className="padding-12 font-14"
                        />
                    </div>

                    <div className="line-height-24 padding-bottom-72 flex-column grey-bottom margin-top-24">
                        <h3>Pledge amount</h3>
                        <p className="dark-grey-font margin-bottom-12">Set a minimum pledge amount for this reward.</p>
                        <div className="dollar-input padding-12">
                            <span>$</span>
                            <input 
                                type="number"
                                onChange={this.handleChange('minimum_value')} 
                                className="border padding-12"
                            />
                        </div>
                    </div>

                    <div className="line-height-24 padding-bottom-72 flex-column grey-bottom margin-top-24">
                        <h3>Description</h3>
                        <p className="dark-grey-font margin-bottom-12">Describe this reward in more detail.</p>
                        <input className="height-72" type="text" onChange={this.handleChange('description')} />
                    </div>

                    <div className="line-height-24 padding-bottom-72 flex-column grey-bottom margin-top-24">
                        <h3>Estimated Delivery</h3>
                        <p className="dark-grey-font margin-bottom-12">Give yourself plenty of time. It's better to deliver to backers 
                        ahead of schedule than behind.</p>
                        <div className="month year">
                            <select 
                                value={this.state.estimated_month} 
                                onChange={this.handleChange('estimated_month')}
                            >
                                <option value="default" disabled></option>
                                <option value="Jan">Jan</option>
                                <option value="Feb">Feb</option>
                                <option value="Mar">Mar</option>
                                <option value="Apr">Apr</option>
                                <option value="May">May</option>
                                <option value="Jun">Jun</option>
                                <option value="Jul">Jul</option>
                                <option value="Aug">Aug</option>
                                <option value="Sep">Sep</option>
                                <option value="Nov">Nov</option>
                                <option value="Dec">Dec</option>
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
                    </div>

                    <div className="line-height-24 padding-bottom-72 flex-column grey-bottom margin-top-24">
                        <h3>Reward quantity</h3>
                        <p className="dark-grey-font margin-bottom-12">
                            You may want to limit the quantity of this reward 
                            available to backers if production or shipping is difficult, 
                            time-consuming, or not scalable.
                        </p>
                        <div className="radio-box">
                            <ul className="box-list">
                                <li className="border padding-18 margin-bottom-6">
                                    <input name="quantity" type="radio"/> Unlimited
                                </li>
                                <li className="border padding-18">
                                    <input name="quantity" type="radio"/> Limit availability
                                </li>
                            </ul>
                            <div className="hidden">
                                <h3>Maximum number available</h3>
                                <input 
                                    type="number"
                                    onChange={this.handleChange('quantity')} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="line-height-24 padding-bottom-72 flex-column grey-bottom margin-top-24">
                        <h3>Time Limit</h3>
                        <p className="dark-grey-font margin-bottom-6">
                            Schedule the timing of this reward if you would 
                            like to garner excitement about limited editions 
                            or special offerings.
                        </p>
                        <div className="radio-box">
                            <ul>
                                <li className="border padding-18 margin-bottom-6">
                                    <input type="radio"/>No time limit
                                </li>
                                <li className="border padding-18">
                                    <input type="radio"/>Start/end on specific dates and times
                                </li>
                            </ul>
                            <input type="number" className="hidden quantity"></input>
                        </div>
                    </div>
                </form>

                <aside className="preview">

                </aside>
            </div>

            </div>
        :
            null
        ;
        const reward1 = rewards && rewards[0] ?
            <>
            <div className="margin-bottom-6">
                <span className="margin-right-70 font-12">PLEDGE AMOUNT</span>
                <span className="margin-right-180 font-12">DETAILS</span>
                <span className="font-12">INCLUDES</span>
            </div>

            <li className="white-box reward-item solid dashed dark-grey-font">
                <div className="pledge flex margin-bottom-20">
                    <div className="flex-column est-date">
                       <span> ${rewards[0].minimum_value}</span>
                    </div>
                    <div className="flex-column">
                        <span className="margin-right-20"> {rewards[0].title}</span>
                        <span> 
                            Estimated Delivery: {rewards[0].estimated_month} {rewards[0].estimated_year}
                        </span>
                    </div>
                    <div className="flex-column">
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
            <div className="margin-bottom-6">
                <span className="margin-right-70 font-12">PLEDGE AMOUNT</span>
                <span className="margin-right-180 font-12">DETAILS</span>
                <span className="font-12">INCLUDES</span>
            </div>

            <li className="white-box reward-item solid dashed dark-grey-font">
                <div className="pledge flex margin-bottom-20">
                    <div className="flex-column est-date">
                       <span> ${rewards[1].minimum_value}</span>
                    </div>
                    <div className="flex-column">
                        <span className="margin-right-20"> {rewards[1].title}</span>
                        <span> 
                            Estimated Delivery: {rewards[1].estimated_month} {rewards[1].estimated_year}
                        </span>
                    </div>
                    <div className="flex-column">
                    </div>
                </div>
                <div></div>
            </li>
            </>
            :
            <li className="sample reward-item grey-bg border dashed dark-grey-font">
                <span>+ Example: a behind-the-scenes peek in writing, photos, or video</span>
            </li>
        ;

        const reward3 = rewards && rewards[2] ?
            <>
            <div className="margin-bottom-6">
                <span className="margin-right-70 font-12">PLEDGE AMOUNT</span>
                <span className="margin-right-180 font-12">DETAILS</span>
                <span className="font-12">INCLUDES</span>
            </div>

            <li className="white-box reward-item solid dashed dark-grey-font">
                <div className="pledge flex margin-bottom-20">
                    <div className="flex-column est-date">
                       <span> ${rewards[2].minimum_value}</span>
                    </div>
                    <div className="flex-column">
                        <span className="margin-right-20"> {rewards[2].title}</span>
                        <span> 
                            Estimated Delivery: {rewards[2].estimated_month} {rewards[2].estimated_year}
                        </span>
                    </div>
                    <div className="flex-column">
                    </div>
                </div>
                <div></div>
            </li>
            </>
            :
            <li className="sample reward-item grey-bg border dashed dark-grey-font">
                <span>+ Example: an exclusive experience or object</span>
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

                <footer className="basic-footer">
                    {footer}                        
                </footer>
            </content>
        )
    }
}

export default ProjectRewards;