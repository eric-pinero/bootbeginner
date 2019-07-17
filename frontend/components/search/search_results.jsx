import React from 'react';
import ProjectIndexItem from '../index/project_index_item';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Options from './options';
import CategoryDropdown from './category_dropdown';

class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            category_menu: false,
            category: this.props.category,
        };
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(){
        debugger
        this.setState({category_menu: !(this.state.category_menu)});
    }

    componentDidMount(){
        this.props.requestProjects();
        this.props.requestCategories();
    }

    render(){
        const results = this.props.projects.filter(project => project.category_name === this.state.category);

        const result_list = results.map(result => {
            return <li key={result.id}><ProjectIndexItem project={result}/></li>
            }
        );

        const cat_arr = this.props.categories.map( category => category.name)
            
        const loc_arr = [
            "the Earth",
            "Australia",
            "Austria",
            "Belgium",
            "Canada",
            "Denmark",
            "France",
            "Germany",
            "Hong Kong",
            "Ireland",
            "Italy",
            "Japan",
            "Luxemborg",
            "Mexico",
            "New Zealand",
            "Norway",
            "Singapore",
            "Spain",
            "Switzerland",
            "the Netherlands",
            "the United Kingdom",
            "the United States"
        ];



        const category_dropdown = this.state.category_menu ?
            <CategoryDropdown options={cat_arr}/>
            :
            null
        ;
        const plural = results.length === 1 ? "" : "s"

        return (
            <>
            <Navbar/>
            <div className="flex flex-center padding-top-60 search-page">
                <h1>Show me <span
                    onClick={this.toggleDropdown}
                    className="cat-button light-grey-back categories">
                    {this.state.category}
                    </span>
                </h1>
                <div className="search_drop">
                    {category_dropdown}
                </div>
            </div>
            <div className='results'>
                <h1>
                    Explore <span>{results.length} project{plural}</span>
                </h1>
                <ul>
                    {result_list}
                </ul>
            </div>
            <Footer/>
            </>
        )
    }
}

export default SearchResults;

