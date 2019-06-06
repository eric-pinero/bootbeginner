import React from "react";

class ShowProject extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            selectedTab: "Campaign"
        }
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(tabName){
        this.setState({selectedTab: tabName})
    }

    componentDidMount(){
        this.props.requestProject(this.props.match.params.projectId);
    }


    render(){
        const {title, subtitle, goal, amount, location, length, description, risks, faqs,} = this.props.project;
        
        

        let activeTab = this.state.selectedTab === "Campaign" ?
            <div>
                <h3>About</h3>
                <section>{description}</section>
                <h3>Risks and challenges</h3>
                <section>{risks}</section>
            </div>
            :
            <div>
                <h2>Frequently Asked Questions</h2>
                <ul>
                    {/* map li faqs from faq array */}
                </ul>
            </div>
        ;

        return(
            <content>
                <header>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </header>

                <section>
                    <div>
                        <img></img>
                        <span>{location}</span>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p className="big">${amount}</p>
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
                        </ul>
                    </div>
                </section>

                <nav>
                    <ul>
                        <li>Campaign</li>
                        <li>FAQ</li>
                    </ul>
                </nav>

                <section>
                    {activeTab}
                    <aside>
                        <div>
                            {/* <img>**Profile Picture</img> */}
                            <div>
                                <h3>**username</h3>
                                <h4>**#created - #backed</h4>
                                <p>**profile biography</p>
                            </div>
                        </div>
                        <h2>Support</h2>
                        <ul>
                            <li>
                                <h3>Make a pledge without a reward</h3>
                                <div>
                                    <span>$</span>
                                    <input type="number"/>
                                </div>
                                {/* Generate rewards by mapping project rewards onto list items */}
                            </li>
                        </ul>
                    </aside>
                </section>
            </content>
        )
    }
}

export default ShowProject;