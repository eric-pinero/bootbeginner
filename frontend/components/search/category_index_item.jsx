import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItem = props => {

  return ( 
      <Link className={props.font} to={`/search/${props.name}`}>{props.name}</Link>
    )
};

export default CategoryIndexItem;
