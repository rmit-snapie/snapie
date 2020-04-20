import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import StageOneWrapper from './stage-1';

const StagesWrapper = ({progress, user}) => {
  if (progress.stage === 1) {
    return <StageOneWrapper />;
  }
};

const mapStateToProps = state => ({
  user: state.userReducer,
  progress: state.progressReducer,
});

StagesWrapper.propTypes = {
  progress: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(StagesWrapper);
