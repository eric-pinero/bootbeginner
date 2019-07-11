import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItem = props => {
  
  return ( 
    <div>
      <Link to={`/search/${props.category.name}`}>{props.category.name}</Link>
    </div>)
};

export default CategoryIndexItem;
