import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pedalStyles from './pedalstyles/PedalItem.module.scss';
const PedalItem = ({ listings }) => {
	const [max, setMax] = useState(5);
	const splitArr = listings.slice(0, max);
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

export default PedalItem;
