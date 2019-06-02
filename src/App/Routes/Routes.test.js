import React from 'react';
import Routes from '.';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom'
import Dashboard from '../Dashboard';
import Match from '../Match';

it('renders without crashing', () => {
    shallow(<Routes/>);
});

it('renders two routes', () => {
    const component = shallow(<Routes/>);
    expect(component.find(Route)).toHaveLength(2);
});

it('renders the first route with correct properties', () => {
    const component = shallow(<Routes/>);
    expect(component.contains(<Route exact path="/" component={Dashboard}/>)).toBe(true);
});

it('renders the second route with correct properties', () => {
    const component = shallow(<Routes/>);
    expect(component.contains(<Route path="/match" component={Match}/>)).toBe(true);
})