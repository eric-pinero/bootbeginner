// import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { logout } from "../actions/session_actions";
import AuthRoute from "../util/route_util";
import Navbar from "./navbar/navbar_container"

const App = () => (
    <div>
        <header>
            <Navbar/>
            <Switch>
                <Route exact path="/" />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
            </Switch>
        </header>
    </div>
);

export default App;