// import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { logout } from "../actions/session_actions";
import AuthRoute from "../util/route_util";
import Navbar from "./navbar/navbar_container";
import ProjectLearn from "./project_create/project_learn"
import ProjectFormContainer from "./project_create/project_form_container"

const App = () => (
    <div>
        <header>
            <Navbar/>
            <Switch>
                <Route exact path="/" />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <Route path="/project-learn" component={ProjectLearn}/>
                <Route path="/project-start" component={ProjectFormContainer}/>
            </Switch>
        </header>
    </div>
);

export default App;