import React from 'react';
import {connect} from 'react-redux';
import LevelOneWrapper from './level-1';

const StageOneWrapper = ({progress, user}) => {
  if (progress.level === 1) {
    return <LevelOneWrapper />;
  }
};

const mapStateToProps = state => ({
  user: state.userReducer,
  progress: state.progressReducer,
});

export default connect(
  mapStateToProps,
  null,
)(StageOneWrapper);
