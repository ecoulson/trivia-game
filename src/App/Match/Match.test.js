import React from 'react';
import Match from '.';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Match />);
});
