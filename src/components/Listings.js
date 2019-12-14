import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PedalItems from './listings/PedalItems';
import listingStyles from './listingstyles/Listings.module.scss';
import { getPedal } from '../actions/search';
const Listings = ({ pedalRes, loading, brands, getPedal }) => {
	useEffect(() => {
		getPedal(brands[0]);
		return () => getPedal(brands[0]);
	}, []);

	return pedalRes.listings && !loading ? (
		pedalRes.listings.length > 0 ? (
			<div className={listingStyles.listings__container}>
				<PedalItems listings={pedalRes.listings} />
			</div>
		) : (
			<div className={listingStyles.listings__container}>
				<p>Waiting for search...</p>
			</div>
		)
	) : (
		<div className={listingStyles.listings__container}>
			<p>Waiting for search...</p>
		</div>
	);
};

Listings.propTypes = {
	search: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		pedalRes: state.search.pedalRes,
		loading: state.search.loading,
		brands: state.search.brands,
	};
};

export default connect(mapStateToProps, { getPedal })(Listings);
