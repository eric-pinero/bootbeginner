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
            linkName = "Log in"
            submitName = "Create Account"
        }

        const emailInput = this.props.formType == "signup" ?
            <label>
                <input
                    id="email"
                    className="signup-input"
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleChange('email')}
                />
            </label>
            :
            null
        ;


        return (
            <div className="session-form">
                <div className="signup-frame">
                    <h3>Have an account? <Link to={destination}>{linkName}</Link></h3>

                    <form onSubmit={this.handleSubmit}>
                    <h1>{header}</h1>
                        <label>
                            <input
                                id="username"
                                className="signup-input"
                                type="text" 
                                value={this.state.username}
                                placeholder="Name"
                                onChange={this.handleChange('username')} 
                            />
                        </label>

                        {emailInput}

                        <label>
                            <input 
                                id="password"
                                className="signup-input"
                                type="password" 
                                value={this.state.password}
                                placeholder="Password" 
                                onChange={this.handleChange('password')}
                            />
                        </label>

                        <div className="news signup-input">
                            <input type="checkbox"/>
                            <span>Check this box if you love boots!</span>
                        </div>

                        <section className="submit-section">
                            <input  className="submit-button" type="submit" value={submitName}/>
                        </section>
                    </form>
                    
                    <ul>
                        {errors}
                    </ul>
                </div>
            </div>
        )

    }
}

export default SessionForm;
