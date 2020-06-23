import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import App from './App';
import Page from './core/pages/page'
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/page" exact component={Page} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes