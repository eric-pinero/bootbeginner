import React from "react";
import Navbar from "../navbar/navbar_container"
class ShowProject extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            selectedTab: "Campaign"
        }
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(tabName){
        this.setState({selectedTab: tabName});
    }

    componentDidMount(){
        this.props.requestProject(this.props.match.params.projectId);
    }


    render(){
        const {title, subtitle, goal, amount, location, length, description, risks, faqs,} = this.props.project;

        let username;
        let projects;
        let createdProjects;
        
        if (this.props.creator){
            username = this.props.creator.username;
            projects = this.props.creator.user_projects;
            createdProjects = projects.length;
        } else {
            username = null;
            createdProjects = null;
        }

        

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
                        <div className="img-holder"><img src={window.eatShoe}/></div>
                        <span>{location}</span>
                    </div>
                    <div className="campaign-details">
                        <ul>
                            <li>
                                <p className="big green-text">${amount}</p>
                                <p className="small">pledged of ${goal} goal</p>
                            </li>

                            <li>
                                <p className="big">Backer Count**</p>
                                <p className="small">backers</p>
                            </li>

                            <li>
                                <p className="big">remaining time</p>
                                <p className="small">days to go</p>
                            </li>
                            <li>
                                <div className="submit-button backer-button">Back this Project</div>
                            </li>
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
                                <li className="reward white-box">
                                    <h3>Make a pledge without a reward</h3>
                                    <div className="dollar-input">
                                        <span>$</span>
                                        <input type="number"/>
                                    </div>
                                    {/* Generate rewards by mapping project rewards onto list items */}
                                </li>
                            </ul>
                        </aside>
                    </section>
                </div>
            </content>
        </>
        )
    }
}

export default ShowProject;