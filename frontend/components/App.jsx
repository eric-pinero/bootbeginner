// import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import {Switch, Route} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>Bootbeginner Begins</h1>
            {/* <GreetingContainer /> */}
            <Switch>
                <Route exact path="/" />
                {/* <Route exact path="/posts/:postId" component={PostShowContainer} />
                <Route path="/posts/:postId/edit" component={EditPostFormContainer} /> */}
            </Switch>
        </header>
    </div>
);

export default App;