import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdClose } from 'react-icons/md';
import { connect } from 'react-redux';
import { getPedals, clearData } from '../actions/search';
import searchStyles from './searchstyles/Search.module.scss';

const Search = ({ getPedals, clearData }) => {
	const [formData, setFormData] = useState({
		query: '',
	});

	const { query } = formData;

	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		getPedals(formData);
	};

	const clearSearch = e => {
		e.preventDefault();

		setFormData({
			query: '',
		});
		clearData();
	};

	return (
		<form onSubmit={e => onSubmit(e)} className={searchStyles.form}>
			<div className={searchStyles.input__row}>
				<button onSubmit={e => onSubmit(e)}>
					<MdSearch />
				</button>
				<input
					data-testid="search-query"
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
	);
};

Search.propTypes = {
	getPedals: PropTypes.func.isRequired,
};

export default connect(null, { getPedals, clearData })(Search);
