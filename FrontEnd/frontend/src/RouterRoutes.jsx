import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from './Resources/JSX/Home';
import RegisterMain from "./Resources/JSX/RegisterMain";
import EdituserMain from "./Resources/JSX/EdituserMain";


const RouterRoutes = () => (
    <Switch>
        <Route exact path="/" component={withRouter(Home)}/>
        <Route exact path="/index" component={withRouter(Home)}/>
        <Route exact path="/register" component={withRouter(RegisterMain)}/>
        <Route exact path="/edituser" component={withRouter(EdituserMain)}/>

    </Switch>

);


export default RouterRoutes;