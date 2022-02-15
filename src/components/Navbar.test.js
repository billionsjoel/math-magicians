import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

test('render nav element', () => {
	const { container, getByText } = render(
		<MemoryRouter>
			<Navbar />
		</MemoryRouter>
	);
	expect(getByText('Math Magicians')).toBeInTheDocument();
});
