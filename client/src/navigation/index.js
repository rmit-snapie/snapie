import React from 'react';
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

export default connect(
  mapStateToProps,
  null,
)(StagesWrapper);
