import React from 'react';
import PropTypes from 'prop-types';
import pedalStyles from './pedalstyles/PedalItem.module.scss';
import { connect } from 'react-redux';
import { setIndex } from '../../actions/search';
const PedalItem = ({ setIndex, pedalRes: { listings }, pedalIndex }) => {
	const onClick = e => {
		const foundPedal = listings.map((pedal, i) => pedal.model);
		const foundIndex =
			foundPedal.indexOf(e.target.textContent) !== -1
				? foundPedal.indexOf(e.target.textContent)
				: foundPedal.indexOf(e.target.alt);
		setIndex(foundIndex);
		return foundIndex;
	};

	const pedals = listings.map((pedal, i) => {
		return (
			<div
				className={`${pedalStyles.pedal} ${pedalIndex === i ? pedalStyles.active : ''}`}
				key={i}
				onClick={e => onClick(e)}
			>
				<img src={pedal.photos[0]._links ? pedal.photos[0]._links.thumbnail.href : ''} alt={pedal.model} />
				<p style={pedal.model.length > 15 ? { fontSize: '.8rem' } : null}>{pedal.model}</p>
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
		pedalIndex: state.search.pedalIndex,
	};
};

export default connect(mapStateToProps, { setIndex })(PedalItem);
