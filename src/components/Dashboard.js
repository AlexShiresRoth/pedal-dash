import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Listings from './Listings';
import dashboardStyles from './dashboardstyles/Dashboard.module.scss';
const Dashboard = () => {
	return (
		<div className={dashboardStyles.dashboard}>
			<div className={dashboardStyles.nav__top}>
				<h1>Pedal Dashboard</h1>
				<Search />
			</div>
			<div className={dashboardStyles.listings__results}>
				<Listings />
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	getPedals: PropTypes.func.isRequired,
};

export default Dashboard;
