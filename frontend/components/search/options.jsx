import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexItem from './category_index_item';

class Options extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const choices = this.props.choices.map(choice => {
            return <li key={choice}><CategoryIndexItem font="font-14" name={choice}/></li>
            }
        );
        return (
            <ul className="no-style">
                {choices}
            </ul>
        )
    };

};

export default Options;