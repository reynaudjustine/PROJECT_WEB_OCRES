import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Formulaire from './Formulaire';


export default () => (
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/formulaire" exact component={Formulaire}/>
    </Switch>
);