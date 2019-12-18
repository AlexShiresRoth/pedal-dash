import React from 'react';
import { render, fireEvent, waitForElement, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import Search from '../src/components/Search';
jest.mock('axios');

test('<Search />', async () => {
	const { getByPlaceholderText, getByRole, container, asFragment } = render(<Search />);

	axiosMock.get.mockResolvedValueOnce({
		formData: { query: '' },
	});

	fireEvent.change(getByPlaceholderText('Earthquaker Devices'));

	const placeHolderNode = await waitForElement(() => {
		getByRole('input');
	});

	expect(axiosMock.get).toHaveBeenCalledTimes(1);
	expect(getByRole('input').toHaveTextContent(''));

	expect(container).toMatchInlineSnapShot(`
    <form onSubmit={e => onSubmit(e)} className={searchStyles.form}>
			<div className={searchStyles.input__row}>
				<button onSubmit={e => onSubmit(e)}>
					<MdSearch />
				</button>
				<input
					type="text"
					value={query}
					name="query"
					onChange={e => onChange(e)}
					placeholder="Earthquaker Devices"
					required
				></input>
				<button onClick={e => clearSearch(e)}>
					<MdClose />
				</button>
			</div>
		</form>
    `);

	expect(asFragment()).toMatchSnapshot();
});
