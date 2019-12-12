import React from 'react';
import PropTypes from 'prop-types';
import pedalStyles from './pedalstyles/PedalItem.module.scss';
const PedalItem = ({ listings }) => {
	const pedals = listings.map((pedal, i) => {
		console.log(pedal.photos[0]._links);
		return (
			<div className={pedalStyles.pedal} key={i}>
				<p>{pedal.model}</p>
				<img src={pedal.photos[0]._links ? pedal.photos[0]._links.thumbnail.href : ''} alt="guitar pedal" />
			</div>
		);
	});
	return <>{pedals}</>;
};

PedalItem.propTypes = {
	listings: PropTypes.array.isRequired,
};

export default PedalItem;
