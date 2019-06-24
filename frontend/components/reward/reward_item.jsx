import React from 'react';

class RewardItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: false,
            pledged_amount: "",
        };
        this.newPledge = this.newPledge.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    newPledge(){
        debugger
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



    render(){
        const {title, description, end_time, estimated_month, estimated_year, minimum_value} = this.props.projectReward;
        const pledgeMenu = this.state.menu ?
            <>
            <div>
                <h5>Pledge amount</h5>
                <input type="number" onChange={this.handleChange("pledged_amount")}/>
            </div>
            <button className="green-button" onClick={this.newPledge}>Continue</button>
            </>
            :
            null
        ;
        return(
            <li 
                className="reward-item"
                onClick={() => this.setState({menu : true})} 
            >
                <h2>Pledge ${minimum_value} or more</h2>
                <h3>{title}</h3>
                <p>{description}</p>
                <section>
                    <div>
                        <h4>Estimated Delivery</h4>
                        <span>{estimated_month} {estimated_year}</span>
                    </div>
                </section>
                {pledgeMenu}
            </li>
        );
    }
}
export default RewardItem;