import React from 'react';
import ProjectIndexItem from '../index/project_index_item';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Options from './options';
import CategoryDropdown from './category_dropdown';


class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            category_menu: false,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.categorySelect = this.categorySelect.bind(this);
    }

    toggleDropdown(){
        this.setState({category_menu: !(this.state.category_menu)});
    }
    

    componentDidMount(){
        this.props.searchProjects(this.props.criteria);
        this.props.requestCategories();
    }

    componentDidUpdate(prevProps){
        if (prevProps.criteria !== this.props.criteria){
            this.props.searchProjects(this.props.criteria);
        }
        
    }

    categorySelect(category){
        this.setState({projects: Object.values(this.props.searchProjects(category))});
    }

    render(){
        const cat_arr = this.props.categories.map(category => category.name);

        const result_list = this.props.projects.map(result => {
            return <li key={result.id}><ProjectIndexItem project={result}/></li>
        }) 

        const category_dropdown = this.state.category_menu ?
            <CategoryDropdown options={cat_arr}/>
            :
            null
        ;
        const plural = this.props.projects.length === 1 ? "" : "s"

        return (
            <>
            <Navbar/>
            <div className="flex flex-center padding-top-60 search-page">
                <h1>Show me 
                    <span
                        onClick={this.toggleDropdown}
                        className="cat-button light-grey-back categories">
                        {this.props.criteria}
                    </span>
                </h1>
                <div className="search_drop">
                    {category_dropdown}
                </div>
            </div>
            <div className='results flex-column'>
                <h1 className="margin-bottom-30 font-22">
                    Explore <span className="green-text">{this.props.projects.length} project{plural}</span>
                </h1>
                <ul className="flex flex-wrap">
                    {result_list}
                </ul>
            </div>
            <Footer/>
            </>
        )
    }
}

export default SearchResults;

