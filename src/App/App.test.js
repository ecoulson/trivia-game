import React from 'react';
import App from '.';
import { shallow } from 'enzyme';
import Routes from './Routes';

it('renders without crashing', () => {
	shallow(<App />);
});

it('renders a routes component', () => {
	const component = shallow(<App/>);
	expect(component.find(Routes)).toHaveLength(1);
})
