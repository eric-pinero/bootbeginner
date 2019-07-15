import React from 'react';
import ProjectIndexItem from '../index/project_index_item';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

class SearchResults extends React.Component{
    constructor(props){
        super(props);
        // this.search = this.props.category;
    }

    componentDidMount(){
        this.props.requestProjects();
    }

    render(){
        const results = this.props.projects.filter(project => project.category_name === this.props.category);

        const result_list = results.map(result => {
            return <li key={result.id}><ProjectIndexItem project={result}/></li>
            }
        );


        debugger
        return (
            <>
            <Navbar/>
            <h1>Explore </h1>
            <ul>
                {result_list}
            </ul>
            <Footer/>
            </>
        )
    }
}

export default SearchResults;