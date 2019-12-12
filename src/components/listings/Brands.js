import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBrands } from '../../actions/search';
const Brands = ({ getBrands, brands }) => {
	useEffect(() => {
		getBrands();
	}, []);

	const brandList = brands.map((brand, i) => {
		return <p key={i}>{brand.make}</p>;
	});
	return <>{brandList}</>;
};

Brands.propTypes = {
	getBrands: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		brands: state.search.brands,
	};
};

export default connect(mapStateToProps, { getBrands })(Brands);
