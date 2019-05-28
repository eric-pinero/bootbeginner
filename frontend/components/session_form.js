import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render(){
        let header;
        let destination;
        let linkName;

        const errors = this.props.errors.map(error => <li>{error}</li>)
        if (this.props.processForm === 'login'){
            header = "Login";
            destination = "/signup";
            linkName = "Sign Up"
        } else{
            header = "Sign Up";
            destination = "/login";
            linkName = "Sign Up"
        }

        return (
            <>
                <h1>{header}</h1>
                <Link to={destination}>{linkName}</Link>
                
                <ul>
                    {errors}
                </ul>
            </>
        )

    }
}

export default SessionForm;
