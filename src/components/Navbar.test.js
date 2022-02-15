import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

test('render nav element', () => {
	const { getByText } = render(
		<MemoryRouter>
			<Navbar />
		</MemoryRouter>
	);
	expect(getByText('Math Magicians')).toBeInTheDocument();
});

test('test hyperlink click', () => {
	render(
		<MemoryRouter>
			<Navbar />
		</MemoryRouter>
	);
	fireEvent.click(screen.getByText('Calculator'));

	expect(screen.getByText('Calculator')).toMatchInlineSnapshot(`
<a
  href="/calculator"
>
  Calculator
</a>
`);
});
