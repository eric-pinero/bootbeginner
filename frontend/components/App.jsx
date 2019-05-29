// import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignupFormContainer from "./signup_form_container"
import LoginFormContainer from "./login_form_container"
import { logout } from "../actions/session_actions"
import Auth from "../util/route_util";

const App = () => (
    <div>
        <header>
            <h1>Bootbeginner Begins</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
            <Switch>
                <Route exact path="/" />
                <Route exact path="/signup" component={SignupFormContainer} />
                <Route path="/login" component={LoginFormContainer} />
            </Switch>
        </header>
    </div>
);

export default App;