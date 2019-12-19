import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { initialState, reducers } from '../../reducers';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../Search';

afterEach(cleanup);

function renderWithRedux(ui, { initialState, store = createStore(combineReducers({ reducers, initialState })) } = {}) {
	return {
		...render(<Provider store={store}>{ui}</Provider>),
		store,
	};
}

test('can render component with redux', () => {
	const searchCont = renderWithRedux(<Search />);
	expect(searchCont.firstChild).toMatchSnapshot();
});

test('can render with redux with custom initial state', () => {
	const { getByTestId } = renderWithRedux(<Search />, {
		initialState: { query: '' },
	});
	expect(getByTestId('search-query')).toHaveTextContent('');
});
