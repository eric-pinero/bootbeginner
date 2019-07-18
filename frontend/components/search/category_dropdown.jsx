import React from "react";
import { Link } from "react-router-dom";
import Options from './options';


class CategoryDropdown extends React.Component{
    constructor(props){
        super(props);
    }


    render() {        
        const dropdown =
            <>
            <div onBlur={this.toggleDropdown} className="cat-dropdown" tabIndex="0">
                <content>
                <div className="bottom-grey-border search-drop-head">
                    <h1>CATEGORIES</h1>
                </div>
                <div className="dropdown-section search-drop">
                    <Options choices={this.props.options}/>
                </div>

                </content>
            </div>
            </>
        ;

        return(
        <div className="dropdown">
            {dropdown}
        </div>
        )
    }
}

export default CategoryDropdown
