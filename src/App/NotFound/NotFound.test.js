import React from 'react';
import NotFound from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<NotFound />);
});
