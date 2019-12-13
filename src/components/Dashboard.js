import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Brands from './listings/Brands';
import Listings from './Listings';
import dashboardStyles from './dashboardstyles/Dashboard.module.scss';
const Dashboard = () => {
	return (
		<div className={dashboardStyles.dashboard}>
			<div className={dashboardStyles.nav__top}>
				<h1>Pedal Dashboard</h1>
				<Search />
				<svg className={dashboardStyles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#009975"
						fill-opacity="0.6"
						d="M0,96L30,96C60,96,120,96,180,96C240,96,300,96,360,117.3C420,139,480,181,540,197.3C600,213,660,203,720,176C780,149,840,107,900,106.7C960,107,1020,149,1080,154.7C1140,160,1200,128,1260,122.7C1320,117,1380,139,1410,149.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
					></path>
				</svg>
			</div>
			<div className={dashboardStyles.brands__list}>
				<Brands />
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
