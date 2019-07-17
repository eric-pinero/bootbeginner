import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    debugger
    return(
      <div className="search-item border" >
        <Link to={`/projects/${this.props.project.id}`}>
          <h1>{this.props.project.title}</h1>
          <p>{this.props.project.description}</p>
          <h2>by {this.props.project.creator_name}</h2>

        </Link>
      </div>
    )
  };
}

export default ProjectIndexItem;
