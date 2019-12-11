import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPedals } from '../actions/search';
const Dashboard = ({ getPedals }) => {
	const onClick = e => {
		e.preventDefault();
		getPedals();
	};

	return (
		<div>
			<div>
				<h1>Welcome to the pedal Dashboard</h1>
			</div>
			<button onClick={e => onClick(e)}>Get Listings</button>
		</div>
	);
};

Dashboard.propTypes = {
	getPedals: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		pedalRes: state.pedalRes,
	};
};

export default connect(mapStateToProps, { getPedals })(Dashboard);
