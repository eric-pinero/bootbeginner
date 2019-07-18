import React from 'react';
import CategoryIndexItem from './category_index_item';
import {Link} from 'react-router-dom';

class CategoriesSideBar extends React.Component{
    componentDidMount(){
        this.props.requestCategories();
    }
    render(){
        const categories = this.props.categories === {} ?
            null:
            this.props.categories.map(category => {
                return( 
                    <li className="margin-bottom-12" key={category.id}>
                        <CategoryIndexItem name={category.name}/>
                    </li>)
            })
        ;
        
        return (
            <main className="sidebar width-100">
                <div className="width-75 flex space-between bottom-grey-border padding-bottom-12 margin-bottom-12">
                    <h1 className="green-text">Categories</h1>
                    <h1><Link to="/">X</Link></h1>
                </div>
                <ul>
                    {categories}
                </ul>
            </main>
        )
    }
}

export default CategoriesSideBar;