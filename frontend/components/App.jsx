import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { logout } from "../actions/session_actions";
import {AuthRoute, ProtRoute} from "../util/route_util";
import ProjectLearn from "./project_create/project_learn";
import ProjectFormContainer from "./project_create/project_form_container";
import EditProjectFormContainer from "./project_create/edit_project_form_container";
import ShowProjectContainer from "./project/show_project_container";
import ProjectIndexContainer from "./index/project_index_container";
import CategoriesContainer from "./search/categories_container";

const App = () => (
    <div>
        <header>
            <Switch>
                <Route exact path="/" component={ProjectIndexContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <Route path="/projects/learn" component={ProjectLearn}/>
                <ProtRoute path="/projects/start" component={ProjectFormContainer}/>
                <ProtRoute path="/projects/:projectId/edit" component={EditProjectFormContainer}/>
                <Route exact path="/projects/:projectId" component={ShowProjectContainer}/>
                <Route path="/explore" component={CategoriesContainer}/>
            </Switch>
        </header>
    </div>
);

export default App;