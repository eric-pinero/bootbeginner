import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItem = props => {
  return ( 
    <>
      <Link  className="font-34" to={`/search/${props.name}`}>{props.name}</Link>
    </>
    )
};

export default CategoryIndexItem;
