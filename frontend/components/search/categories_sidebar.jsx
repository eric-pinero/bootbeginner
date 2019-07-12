import React from 'react';
import CategoryIndexItem from './category_index_item';
import {Link} from 'react-router-dom';

class Index extends React.Component{
    componentDidMount(){
        this.props.requestCategories();
    }
    render(){
        const categories = 
            this.props.categories.map(category => {
                return <li><CategoryIndexItem category={category} key={category.id}/></li>
            })
        ;
        
        return (
            <>
            <h1>Categories</h1>
            <h1><Link to="/">X</Link></h1>
            <ul>
                {categories}
            </ul>
            </>
        )
    }
}

export default Index;