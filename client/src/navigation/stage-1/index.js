import React from 'react';
import {connect} from 'react-redux';
import LevelOneWrapper from './level-1';
import PropTypes from 'prop-types';

const StageOneWrapper = ({progress, user}) => {
  if (progress.level === 1) {
    return <LevelOneWrapper />;
  }
};

const mapStateToProps = state => ({
  user: state.userReducer,
  progress: state.progressReducer,
});

StageOneWrapper.propTypes = {
  progress: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(StageOneWrapper);
