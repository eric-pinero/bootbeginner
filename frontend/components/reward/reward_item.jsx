import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class RewardItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: false,
            pledged_amount: "",
        };
        this.newPledge = this.newPledge.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.menuDisplay = this.menuDisplay.bind(this);
    }

    newPledge(){
        const pledge = {
            project_id : this.props.projectId,
            user_id : this.props.userId,
            pledged_amount : this.state.pledged_amount,
            reward_id : this.props.projectReward.id,
        };
        this.props.createPledge(pledge);
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    menuDisplay(){
        var elements = document.getElementsByClassName("green-cover");

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.classList.remove("green-cover");
        }

        this.setState({menu : true});
    }



    render(){
        const {title, description, end_time, estimated_month, estimated_year, minimum_value} = this.props.projectReward;
        const pledgeMenu = this.state.menu ?
            <>
            <div>
                <h5>Pledge amount</h5>
                <input type="number" onChange={this.handleChange("pledged_amount")}/>
            </div>
            <Link to="/" className="green-button" onClick={this.newPledge}>Continue</Link>
            </>
            :
            null
        ;
        return(
            <li 
                className="green-cover reward white-box"
                onClick={this.menuDisplay} 
            >
                <div className="opacity">
                    <h2>Pledge ${minimum_value} or more</h2>
                    <h3>{title}</h3>
                    <p className="dark-grey-font">{description}</p>
                    <section>
                        <div>
                            <h4>Estimated Delivery</h4>
                            <span>{estimated_month} {estimated_year}</span>
                        </div>
                    </section>
                    {pledgeMenu}
                </div>
            </li>
        );
    }
}
export default RewardItem;