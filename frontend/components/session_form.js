import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);

        this.props.processForm(user).then(() => this.props.history.push("/"));
    }

    handleChange(field){
        return (e) => {
            this.setState({[field]: e.target.value })
        }
    }

    render(){
        let header;
        let destination;
        let linkName;
        let submitName;
        
        const errors = this.props.errors.session.map(error => <li>{error}</li>)
        if (this.props.formType === 'login'){
            header = "Log in";
            destination = "/signup";
            linkName = "Sign Up"
            submitName = "Log me in!"
        } else{
            header = "Sign up";
            destination = "/login";
            linkName = "Sign In"
            submitName = "Create Account"
        }

        return (
            <>
                <h1>{header}</h1>
                <Link to={destination}>{linkName}</Link>

                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange('username')} 
                        />
                    </label>

                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                        />
                    </label>

                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange('password')}
                        />
                    </label>
                    <input type="submit" value={submitName}/>
                </form>
                
                <ul>
                    {errors}
                </ul>
            </>
        )

    }
}

export default SessionForm;
