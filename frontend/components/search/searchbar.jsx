import React from 'react';
import {Link} from 'react-router-dom';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showSearch : false,
        };
        this.showSearch = this.showSearch.bind(this);
    }

    showSearch(){
        this.setState({showSearch: !(this.state.showSearch)});
    }

    render(){
        const searchbar = this.state.showSearch ?
            <input className= "searchBar" type="text"></input>
            :
            <div className="nav-link" onClick={this.showSearch}>Search
                <img src="https://img.icons8.com/ios-glyphs/26/000000/search.png"></img>
            </div>
        ;

        return(
        )
    }
}