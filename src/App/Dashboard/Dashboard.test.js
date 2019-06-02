import React from 'react';
import Dashboard from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Dashboard />);
});
