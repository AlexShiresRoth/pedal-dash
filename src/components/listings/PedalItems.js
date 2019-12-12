import React from 'react';
import PropTypes from 'prop-types';
import pedalStyles from './pedalstyles/PedalItem.module.scss';
const PedalItem = ({ listings }) => {
	const pedals = listings.map((pedal, i) => {
		console.log(pedal);
		return (
			<div className={pedalStyles.pedal} key={i}>
				<p>{pedal.model}</p>
			</div>
		);
	});
	return <>{pedals}</>;
};

PedalItem.propTypes = {
	listings: PropTypes.array.isRequired,
};

export default PedalItem;
