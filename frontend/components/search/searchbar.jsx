import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search : "",
            searched : false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value });
        };
    }

    handleSearch(e){
        e.preventDefault();
        this.setState({searched : true});
    }

    componentDidUpdate(prevProps){
        if (this.state.searched){
            this.setState({searched : false});
        }
    }

    render(){
        const searchBar = 
            <form className="searchnav" onSubmit={this.handleSearch}>
                <input 
                    className="searchbar noborder" 
                    type="text" 
                    placeholder="Search for Projects"
                    value={this.state.search}
                    onChange={this.handleChange('search')}
                />
                <span className="pointer" onClick={this.props.close}>X</span>
            </form>
        ;

        const search = this.state.searched ? <Redirect to={`/search/${this.state.search}`}/> : null
        return(
            <>
            {searchBar}
            {search}
            </>
        )
    };
}

export default Searchbar