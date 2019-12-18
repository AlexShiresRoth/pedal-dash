import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Brands from './listings/Brands';
import InitialResult from './InitialResult';
import Listings from './Listings';
import dashboardStyles from './dashboardstyles/Dashboard.module.scss';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { connect } from 'react-redux';
import { getPedal } from '../actions/search';
const Dashboard = ({ getPedal }) => {
	const [scrolling, setScroll] = useState({
		isScrolling: false,
		x: 0,
		scrollX: 0,
	});

	const brandsRef = useRef();
	const pedalsRef = useRef();
	let animationRef = useRef();

	useEffect(() => {
		getPedal();
		return () => cancelAnimationFrame(animationRef.current);
	}, []);

	const onScrollRight = e => {
		setScroll({
			...scrolling,
			isScrolling: true,
		});
		brandsRef.current.scrollLeft = brandsRef.current.scrollLeft += 10;
		animationRef.current = requestAnimationFrame(onScrollRight);
	};

	const onScrollLeft = e => {
		setScroll({
			...scrolling,
			isScrolling: true,
		});

		brandsRef.current.scrollLeft = brandsRef.current.scrollLeft -= 10;

		animationRef.current = requestAnimationFrame(onScrollLeft);
	};

	const onScrollListRight = e => {
		setScroll({
			...scrolling,
			isScrolling: true,
		});
		pedalsRef.current.scrollLeft = pedalsRef.current.scrollLeft += 10;
		animationRef.current = requestAnimationFrame(onScrollListRight);
	};

	const onScrollListLeft = e => {
		setScroll({
			...scrolling,
			isScrolling: true,
		});

		pedalsRef.current.scrollLeft = pedalsRef.current.scrollLeft -= 10;
		animationRef.current = requestAnimationFrame(onScrollListLeft);
	};
	const onDrop = e => {
		setScroll({
			...scrolling,
			isScrolling: false,
		});

		cancelAnimationFrame(animationRef.current);
	};

	return (
		<div className={dashboardStyles.dashboard}>
			<div className={dashboardStyles.nav__top}>
				<h1>Pedal Dashboard</h1>
				<Search />
			</div>
			<div className={dashboardStyles.brands__list}>
				<button
					className={dashboardStyles.scroll__left}
					onMouseDown={() => onScrollLeft(brandsRef)}
					onMouseUp={e => onDrop(e)}
					onTouchStart={() => onScrollLeft(brandsRef)}
					onTouchEnd={e => onDrop(e)}
				>
					<MdChevronLeft />
				</button>
				<div ref={brandsRef} className={dashboardStyles.brands__container}>
					<Brands />
				</div>
				<button
					className={dashboardStyles.scroll__right}
					onMouseDown={e => onScrollRight(e)}
					onTouchStart={e => onScrollRight(e)}
					onTouchEnd={e => onDrop(e)}
					onMouseUp={e => onDrop(e)}
				>
					<MdChevronRight />
				</button>
			</div>
			<div className={dashboardStyles.listings__results}>
				<button
					className={dashboardStyles.scroll__left}
					onMouseDown={e => onScrollListLeft(e)}
					onMouseUp={e => onDrop(e)}
					onTouchStart={e => onScrollListLeft(e)}
					onTouchEnd={e => onDrop(e)}
				>
					<MdChevronLeft />
				</button>
				<Listings pedalsRef={pedalsRef} />
				<button
					className={dashboardStyles.scroll__right}
					onMouseDown={e => onScrollListRight(e)}
					onTouchStart={e => onScrollListRight(e)}
					onTouchEnd={e => onDrop(e)}
					onMouseUp={e => onDrop(e)}
				>
					<MdChevronRight />
				</button>
			</div>
			<div className={dashboardStyles.pedal__view}>
				<InitialResult />
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	getPedal: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		pedalRes: state.search.pedalRes,
	};
};

export default connect(mapStateToProps, { getPedal })(Dashboard);
