import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPageLoading } from '../../../redux/loader/loaderSelector';

const Loader = ({ pageLoading }) =>
  pageLoading ? (
    <progress className="progress is-small is-primary" max="100">
      5%
    </progress>
  ) : null;

const mapStateToProps = createStructuredSelector({
  pageLoading: selectPageLoading
});

export default connect(mapStateToProps)(Loader);
