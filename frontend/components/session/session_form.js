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
        this.demoSubmit = this.demoSubmit.bind(this)
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

    demoSubmit(e){

        e.preventDefault();
        const demo ={email: "bootsonboots@bootjack.com", password: "test123"}
        this.props.processForm(demo).then(() => this.props.history.push("/"));
    }

    render(){
        let formHeader;
        let destination;
        let linkName;
        let submitName;
        const errors = this.props.errors.length == 0 ?
            null
            :
            <ul className="errors">
                {this.props.errors.map(error => <li>{error}</li>)}
            </ul>

        if (this.props.formType === 'login'){
            formHeader = "Log in";
            destination = "/signup";
            linkName = "Sign Up!"
            submitName = "Log me in!"
        } else{
            formHeader = "Sign up";
            destination = "/login";
            linkName = "Log in"
            submitName = "Create Account"
        }

        const nameInput = this.props.formType == "signup" ?
            <input
                id="username"
                className="signup-input"
                type="text" 
                value={this.state.username}
                placeholder="Name"
                onChange={this.handleChange('username')} 
            />
            :
            null
        ;

        const signupHeader = this.props.formType == "signup" ?
            <h3>Have an account? 
                <Link className="session-link" to={destination}> {linkName}</Link>
            </h3>
            :
            null
        ;

        const loginFooter = this.props.formType == "login" ?
            <p className="login-footer">New to Bootbeginner? <Link className="session-link" to={destination}>{linkName}</Link></p>
            :
            null
        ;
        
            return (
            <div className="session-form">
                <div className="signup-frame">
                    {signupHeader}
                    
                    <form onSubmit={this.handleSubmit}>
                        <h1>{formHeader}</h1>
                            
                        {errors}

                        {nameInput}

                        <input
                            id="email"
                            className="signup-input"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleChange('email')}
                        />



                        <input 
                            id="password"
                            className="signup-input"
                            type="password" 
                            value={this.state.password}
                            placeholder="Password" 
                            onChange={this.handleChange('password')}
                        />

                        <section className="submit-section">
                            <input  className="submit-button" type="submit" value={submitName}/>
                        </section>

                        {loginFooter}
                        <button id="demo" onClick={this.demoSubmit}>Demo User</button>
                    </form>
                </div>
            </div>
            )

    }
}

export default SessionForm;
