import React from 'react';
import Routes from '.';
import { shallow } from 'enzyme';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard';
import Match from '../Match';
import NotFound from '../NotFound';

it('renders without crashing', () => {
    shallow(<Routes/>);
});

it('renders a switch', () => {
    const component = shallow(<Routes/>);
    expect(component.find(Switch)).toHaveLength(1);
})

it('renders routes', () => {
    const component = shallow(<Routes/>);
    expect(component.find(Route)).toHaveLength(3);
});

it('renders the first route with correct properties', () => {
    const component = shallow(<Routes/>);
    expect(component.contains(<Route exact path="/" component={Dashboard}/>)).toBe(true);
});

it('renders the second route with correct properties', () => {
    const component = shallow(<Routes/>);
    expect(component.contains(<Route path="/match" component={Match}/>)).toBe(true);
});

it('renders a not found route', () => {
    const component = shallow(<Routes/>);
    expect(component.contains(<Route component={NotFound}/>)).toBe(true);
});