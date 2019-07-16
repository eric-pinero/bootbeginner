import React from 'react';

export default options = props => {
    const choices = props.choices.map(choice => {
        return <li key={choice}>{choice}</li>
        }
    );

    return (
        choices
    )
};
