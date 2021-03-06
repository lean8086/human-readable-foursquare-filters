import React from 'react';
import Select from '../components/Select';
import { connect } from 'react-redux';
import { updateParams } from '../actions/params';

const SelectContainer = (props) => (
  <Select {...props} />
);

const mapStateToProps = state => ({
  params: state.params,
});

const mapDispatchToProps = {
  updateParams,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectContainer);
