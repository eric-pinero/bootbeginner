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
            <label>Email:
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                />
            </label>
            :
            null


        return (
            <main>
                <h3>Have an account? <Link to={destination}>{linkName}</Link></h3>

                <form onSubmit={this.handleSubmit}>
                <h1>{header}</h1>
                    <label>Username:
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.handleChange('username')} 
                        />
                    </label>

                    {emailInput}

                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.handleChange('password')}
                        />
                    </label>

                    <div className="news">
                        <input type="checkbox"/>
                        <span>Receive a weekly mix of hadpicked projects, 
                            plus occasional Bootbeginner news</span>
                    </div>

                    <input type="submit" value={submitName}/>
                    <p>By signing up, you agree to our <a src="/">terms of use</a>, 
                    <a src="/"> privacy policy</a>, and <a src="/"> cookie policy</a>.
                    <br/> 
                    <a>Read more</a></p>

                    <p>or</p>
                </form>
                
                <ul>
                    {errors}
                </ul>
            </main>
        )

    }
}

export default SessionForm;
