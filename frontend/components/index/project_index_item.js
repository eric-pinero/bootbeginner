import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const {id, project_pledges, project_rewards, title, subtitle,
      goal, location, length, description, risks, faqs, imageUrl, 
      creator_id, creator_name} = this.props.project;

    const pledgeTotal = project_pledges ? 
      project_pledges.reduce((acc, curr) => acc + curr.pledged_amount, 0) 
      : 
      0
    ;

    const fundPercent = goal ? (pledgeTotal / goal) * 100 : 0;


    return(
      <div className="search-item border " >
        <Link to={`/projects/${id}`}>
        <img className="bottom-grey-border max-100" src={imageUrl}/>
          <div className="margin-18">
            <div className="padding-bottom-60">
              <h1 className="font-18 near-black-font">{title}</h1>
              <p className="grey-text font-14 margin-tb-20">{description}</p>
              <h2 className="near-black-font font-13">by {creator_name}</h2>
            </div>
            <div className="green-border-top font-13">
              <h2 className="green-text padding-top-18 margin-bottom-6">${pledgeTotal} pledged</h2>
              <h2 className="grey-text margin-bottom-6">{fundPercent}% funded</h2>
              <h2 className="grey-text">{length} days to go</h2>
            </div>
          </div>
        </Link>
      </div>
    )
  };
}

export default ProjectIndexItem;
