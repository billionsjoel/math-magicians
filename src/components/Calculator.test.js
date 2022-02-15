import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('renders buttons', () => {
	const tree = renderer.create(<Calculator />).toJSON();

});
