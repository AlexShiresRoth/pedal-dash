import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';
import { getPedals } from '../actions/search';
import searchStyles from './searchstyles/Search.module.scss';

const Search = ({ getPedals, loading, brands }) => {
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
	return (
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
			</div>
		</form>
	);
};

Search.propTypes = {
	getPedals: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		pedalRes: state.search.pedalRes,
		loading: state.search.loading,
	};
};

export default connect(mapStateToProps, { getPedals })(Search);
