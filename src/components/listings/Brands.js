import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBrands } from '../../actions/search';
import brandStyles from './brandstyles/BrandList.module.scss';

const Brands = ({ getBrands, brands, loading }) => {
	useEffect(() => {
		getBrands();
	}, []);

	const removeDupes = brands
		.map((brand, i) => {
			return brand.make;
		})
		.filter((brand, i, arr) => {
			console.log(arr.indexOf(brand) === i);
			return arr.indexOf(brand) === i;
		});

	const brandList = removeDupes.map((brand, i) => {
		return (
			<div key={i} className={brandStyles.brand}>
				<p>{brand}</p>
			</div>
		);
	});
	return !loading ? (
		<>{brandList}</>
	) : (
		<>
			<p>Loading Brands...</p>
		</>
	);
};

Brands.propTypes = {
	getBrands: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		brands: state.search.brands,
		loading: state.search.loading,
	};
};

export default connect(mapStateToProps, { getBrands })(Brands);
