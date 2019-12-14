import React from 'react';
import PropTypes from 'prop-types';
import pedalStyles from './pedalstyles/PedalItem.module.scss';
import { connect } from 'react-redux';
const PedalItem = ({ listings }) => {
	const onClick = e => {};
	const pedals = listings.map((pedal, i) => {
		return (
			<div className={pedalStyles.pedal} key={i}>
				<img src={pedal.photos[0]._links ? pedal.photos[0]._links.thumbnail.href : ''} alt="guitar pedal" />
				<p>{pedal.model.length > 12 ? pedal.model.substr(0, 12) + '...' : pedal.model}</p>
			</div>
		);
	});
	return <>{pedals}</>;
};

PedalItem.propTypes = {
	listings: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
	return {
		pedalRes: state.search.pedalRes,
	};
};

export default connect(mapStateToProps)(PedalItem);
