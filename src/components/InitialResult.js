import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBrands } from "../actions/search";
const InitialResult = ({ brands }) => {
  console.log(brands[0]);
  return <div></div>;
};

InitialResult.propTypes = {};

const mapStateToProps = state => {
  return {
    brands: state.search.brands
  };
};
export default connect(mapStateToProps, { getBrands })(InitialResult);
