import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { logout } from "../actions/session_actions";
import {AuthRoute, ProtRoute} from "../util/route_util";
import Navbar from "./navbar/navbar_container";
import ProjectLearn from "./project_create/project_learn";
import ProjectFormContainer from "./project_create/project_form_container";
import EditProjectFormContainer from "./project_create/edit_project_form_container";
import ProjectBasics from "./project_create/edit_form_sections/project_basics";
import ProjectRewards from "./project_create/edit_form_sections/project_rewards";
import ProjectStory from "./project_create/edit_form_sections/project_story";

const App = () => (
    <div>
        <header>
            <Navbar/>
            <Switch>
                <Route exact path="/" />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <Route path="/projects/learn" component={ProjectLearn}/>
                <Route path="/projects/start" component={ProjectFormContainer}/>
                <Route exact path="/projects/:projectId/edit" component={EditProjectFormContainer}/>
                <Route path="/projects/:projectId/edit/basics" component={ProjectBasics}/>
                <Route path="/projects/:projectId/edit/rewards" component={ProjectRewards}/>
                <Route path="/projects/:projectId/edit/story" component={ProjectStory}/>
                {/* <ProtRoute/> */}
            </Switch>
        </header>
    </div>
);

export default App;