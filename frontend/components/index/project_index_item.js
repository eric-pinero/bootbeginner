import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => {
  debugger
  return ( 
    <div>
      <Link to={`/projects/${props.id}`}>
        <h1>{props.project.title}</h1>
        <h2>by {props.project.creatorName}</h2>
        <p>{props.project.description}</p>

      </Link>
    </div>)
};

export default ProjectIndexItem;
