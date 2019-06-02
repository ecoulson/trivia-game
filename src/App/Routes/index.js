import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Match from '../Match';
import NotFound from '../NotFound';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/match" component={Match} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}