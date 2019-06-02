import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Match from '../Match';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Dashboard} />
                <Route path="/match" component={Match} />
            </Router>
        );
    }
}