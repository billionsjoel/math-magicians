import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from './pages/Home';

test('render homepage', () =>
{
	render(<Home />);
	expect(screen.getByText('Welcome to our page!')).toMatchInlineSnapshot(`
<h1>
  Welcome to our page!
</h1>
`);
});
