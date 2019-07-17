import React from 'react';

class Options extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const choices = this.props.choices.map(choice => {
            return <li key={choice}>{choice}</li>
            }
        );
        return (
            <ul>
                {choices}
            </ul>
        )
    };

};

export default Options;