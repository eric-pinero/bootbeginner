import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => {
  
  return ( 
    <div>
      <Link to={`/projects/${props.project.id}`}>{props.project.subtitle}</Link>
    </div>)
};

export default ProjectIndexItem;
