import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';
import Search from '../Search';
jest.mock('axios');

describe('<App />', () => {
	it('renders the component', () => {
		const container = render(<App />);
		expect(container.firstChild).toMatchSnapshot();
	});
});

describe('<Search />', () => {
	it('renders the component', () => {
		const searchCont = render(<Search />);
		expect(searchCont.firstChild).toMatchSnapshot();
	});
});
