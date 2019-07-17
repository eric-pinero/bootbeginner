import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){

    return(
      <div className="search-item" >
        <Link to={`/projects/${this.props.project.id}`}>
          <h1>{this.props.project.title}</h1>
          <h2>by {this.props.project.creator_name}</h2>
          <p>{this.props.project.description}</p>

        </Link>
      </div>
    )
  };
}

export default ProjectIndexItem;
