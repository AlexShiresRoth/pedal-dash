import React from 'react';
import PropTypes from 'prop-types';
import resStyles from './resultstyles/InitialResult.module.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { connect } from 'react-redux';
import { setIndex } from '../actions/search';

const InitialResult = ({ loading, pedalRes, pedalIndex, setIndex }) => {
	const changeIndexNext = () => {
		return pedalIndex === pedalRes.listings.length - 1 ? setIndex((pedalIndex = 0)) : setIndex((pedalIndex += 1));
	};

	const changeIndexBack = () => {
		return pedalIndex !== 0 ? setIndex((pedalIndex -= 1)) : setIndex(pedalRes.listings.length - 1);
	};

	const svgWave = (
		<svg className={resStyles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill="#009975"
				fill-opacity="0.6"
				d="M0,96L30,96C60,96,120,96,180,96C240,96,300,96,360,117.3C420,139,480,181,540,197.3C600,213,660,203,720,176C780,149,840,107,900,106.7C960,107,1020,149,1080,154.7C1140,160,1200,128,1260,122.7C1320,117,1380,139,1410,149.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
			></path>
		</svg>
	);
	const pedalKnob = (
		<svg className={resStyles.pedal__knob} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<g>
				<circle cx="50" cy="50" r="50" fill="transparent" stroke="#009975" strokeWidth="7px" />
				<line className={resStyles.line} x1="-15" y1="50" x2="50" y2="50" stroke="#009975" strokeWidth="7px" />
			</g>
		</svg>
	);

	const removeHtmlTags = content => {
		return content.replace(
			/<div>|<\/div>|<br>|<\/br>|<p>|<\/p>|<span>|<\/span>|<strong>|<\/strong>|<b>|<\/b>|<i>|<\/i>|<u>|<\/u>/g,
			''
		);
	};
	return pedalRes.listings && !loading ? (
		<div className={resStyles.pedal__container}>
			{svgWave}
			<div className={resStyles.back__button} onClick={e => changeIndexBack(e)}>
				<MdChevronLeft />
			</div>
			<div className={resStyles.column}>
				<div className={resStyles.image__container}>
					<img
						src={
							pedalRes.listings[pedalIndex] !== null
								? pedalRes.listings[pedalIndex].photos[0]._links.large_crop.href
								: ''
						}
						alt={pedalRes.listings[pedalIndex].model}
					></img>
				</div>
			</div>
			<div className={resStyles.column}>
				<div className={resStyles.container}>
					{pedalKnob}
					<span>Model:</span>
					<p>{pedalRes.listings[pedalIndex].model}</p>
				</div>
				<div className={resStyles.container}>
					{pedalKnob}
					<span>Brand:</span>
					<p>{pedalRes.listings[pedalIndex].make}</p>
				</div>
				<div className={resStyles.container}>
					{pedalKnob}
					<span>Title:</span>
					<p>{pedalRes.listings[pedalIndex].title}</p>
				</div>
				<div className={resStyles.container}>
					{pedalKnob}
					<span>Description:</span>
					<p>
						{removeHtmlTags(pedalRes.listings[pedalIndex].description).length > 200
							? removeHtmlTags(pedalRes.listings[pedalIndex].description).substr(0, 200) + '...'
							: removeHtmlTags(pedalRes.listings[pedalIndex].description)}
					</p>
				</div>
				<div className={resStyles.container}>
					{pedalKnob}
					<span>Type:</span>
					<p>{pedalRes.listings[pedalIndex].categories[0].full_name}</p>
				</div>
				<div className={resStyles.container}>
					{pedalKnob}
					<span>Year:</span>
					<p>{pedalRes.listings[pedalIndex].year !== '' ? pedalRes.listings[pedalIndex].year : 'N/A'}</p>
				</div>
			</div>
			<div className={resStyles.next__button} onClick={e => changeIndexNext(e)}>
				<MdChevronRight />
			</div>
		</div>
	) : (
		<p>Loading Pedal...</p>
	);
};

InitialResult.propTypes = {
	brands: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
	return {
		brands: state.search.brands,
		loading: state.search.loading,
		pedalRes: state.search.pedalRes,
		pedalIndex: state.search.pedalIndex,
	};
};
export default connect(mapStateToProps, { setIndex })(InitialResult);
