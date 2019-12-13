import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Brands from './listings/Brands';
import InitialResult from './InitialResult';
import Listings from './Listings';
import dashboardStyles from './dashboardstyles/Dashboard.module.scss';
import { connect } from 'react-redux';
const Dashboard = ({ pedalRes }) => {
	return (
		<div className={dashboardStyles.dashboard}>
			<div className={dashboardStyles.nav__top}>
				<h1>Pedal Dashboard</h1>
				<Search />
			</div>
			<div className={dashboardStyles.brands__list}>
				<Brands />
			</div>
			<div className={dashboardStyles.listings__results}>
				<Listings />
			</div>
			<div className={dashboardStyles.pedal__view} style={pedalRes.listings ? { margin: '-2rem 0' } : null}>
				<InitialResult />
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	getPedals: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		pedalRes: state.search.pedalRes,
	};
};

export default connect(mapStateToProps)(Dashboard);
