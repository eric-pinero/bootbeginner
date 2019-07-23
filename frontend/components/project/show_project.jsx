import React from "react";
import Navbar from "../navbar/navbar_container";
import Footer from '../footer/footer';
import RewardItem from '../reward/reward_item_container';
import { Link } from 'react-router-dom';

class ShowProject extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: "Campaign",
            menu: false,
            pledged_amount: "",
        };
        this.changeTab = this.changeTab.bind(this);
        this.newPledge = this.newPledge.bind(this);
        this.menuDisplay = this.menuDisplay.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    changeTab(tabName){
        this.setState({selectedTab: tabName});
    }

    componentDidMount(){
        this.props.requestProject(this.props.match.params.projectId);
    }

    newPledge(){
        const pledge = {
            project_id : this.props.project.id,
            user_id : this.props.currentUserId,
            pledged_amount : this.state.pledged_amount,
            reward_id : null,
        };
        this.props.createPledge(pledge);
    }

    menuDisplay(){
        this.setState({menu : true});
    }


    render(){
        const {id, project_pledges, project_rewards, title, subtitle,
             goal, location, length, description, risks, faqs, imageUrl, creator_id,} = this.props.project;

        let username;
        let projects;
        let createdProjects;

        const backerCount = project_pledges ? project_pledges.length : null;
        const backerS = backerCount === 1 ? "backer" : "backers";
        const pledgeTotal = project_pledges ? 
            project_pledges.reduce((acc, curr) => acc + curr.pledged_amount, 0) 
            : 
            0
        ;

        if (this.props.creator){
            username = this.props.creator.username;
            projects = this.props.creator.user_projects;
            createdProjects = projects.length;
        } else {
            username = null;
            createdProjects = null;
        }
        const rewards = project_rewards ? 
            project_rewards.sort(function(a, b){return a.minimum_value-b.minimum_value}).map(reward => {
                return <RewardItem userId={this.props.currentUserId} projectId={id} projectReward={reward} key={reward.id}/>
            })
        :
            null
        ;

        let activeTab = this.state.selectedTab === "Campaign" ?
            <div className="campaign-tab tab">
                <h3>About</h3>
                <section>{description}</section>
                <h3>Risks and challenges</h3>
                <section>{risks}</section>
            </div>
            :
            <div className="faq-tab tab">
                <h2>Frequently Asked Questions</h2>
                <ul>
                    {/* map li faqs from faq array */}
                </ul>
            </div>
        ;
            
        const remainingTime = length === "" ? "0" : length
            
        const editButton = this.props.currentUserId === creator_id ?
            <li className="margin-top-24 dark-grey-bg padding-12">
                <p>Click <span className="green-text"> <Link to={`${id}/edit/overview`}>here</Link> </span>
                to edit your project</p>
            </li>
            :
            null
        ;

        const rewardButton = this.state.menu ? 
            <Link to="/" className="green-button" onClick={this.newPledge}>Continue</Link>
            :
            null
        ;

        return(
            <>
            <Navbar/>
            <content className="project-show">
                <div className="light-grey-back">
                <header className="project-head">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </header>

                <section className="main-project">
                    <div className="stack">
                        <div className="img-holder">
                            <img src={imageUrl}/>
                        </div>
                        <span>{location}</span>
                    </div>
                    <div className="campaign-details">
                        <ul>
                            <li>
                                <p className="big green-text">${pledgeTotal}</p>
                                <p className="small">pledged of ${goal} goal</p>
                            </li>

                            <li>
                                <p className="big">{backerCount}</p>
                                <p className="small">{backerS}</p>
                            </li>

                            <li>
                                <p className="big">{remainingTime}</p>
                                <p className="small">days to go</p>
                            </li>
                            <li>
                                <div onClick={() => window.scroll(0, 1150)} 
                                className="submit-button backer-button">Back this Project</div>
                            </li>
                                {editButton}
                        </ul>
                    </div>
                </section>
                </div>

                <nav className="project-nav">
                    <ul>
                        <li onClick={() => this.changeTab('Campaign')}>Campaign</li>
                        <li onClick={() => this.changeTab('FAQ')}>FAQ</li>
                    </ul>
                </nav>

                <div className="light-grey-back">
                    <section className="tab-rewards light-grey-back">
                        {activeTab}
                        <aside className="reward-sidebar">
                            <div className="creator-info white-box">
                                {/* <img>**Profile Picture</img> */}
                                <div>
                                    <h3>{username}</h3>
                                    <h4>{createdProjects} created - 0 backed</h4>
                                    <p>One of Bootbeginner's most prolific creators.
                                    With over two dozen projects and no successful campaigns, his
                                    tenacity is an inspiration. (No relation)</p>
                                </div>
                            </div>
                            <h2>Support</h2>
                            <ul>
                                <li className="white-box reward flex-column" onClick={this.menuDisplay}>
                                    <h3>Make a pledge without a reward</h3>
                                    <div className="dollar-input">
                                        <span>$</span>
                                        <input className="width-90" type="number"
                                            onChange={this.handleChange('pledged_amount')}
                                            value={this.state.pledged_amount}
                                        />
                                    </div>
                                    {rewardButton}
                                </li>
                                { rewards }
                            </ul>
                        </aside>
                    </section>
                </div>
            </content>
            <Footer/>
        </>
        )
    }
}

export default ShowProject;