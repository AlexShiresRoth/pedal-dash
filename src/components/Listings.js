import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PedalItems from './listings/PedalItems';
import listingStyles from './listingstyles/Listings.module.scss';

const Listings = ({ pedalRes, loading }) => {
	return pedalRes.listings && !loading ? (
		<div className={listingStyles.listings__container}>
			<PedalItems listings={pedalRes.listings} />
		</div>
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
	};
};

export default connect(mapStateToProps)(Listings);
