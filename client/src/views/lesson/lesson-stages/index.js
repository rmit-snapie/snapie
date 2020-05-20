import React, {useState} from 'react';
import {object, func} from 'prop-types';
import {connect} from 'react-redux';
import {
  getNumberOfTests,
  getTestQuestions,
} from '../../../helpers/QuestionHelper';
import LessonStages from './LessonStages';
import {play, replay} from '../../../redux/actions/ProgressActions';
import {
  setCurrentQuestion,
  setQuestions,
} from '../../../redux/actions/QuestionsContentActions';

const LessonStagesWrapper = ({
  handlePlay,
  handleReplay,
  progress: {stage, level, test},
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const handlePress = async (replayStage, replayLevel) => {
    // loading is true to render loading screen...
    setLoading(true);
    if (replayStage < stage || replayLevel < level) {
      const lastTest = getNumberOfTests(replayStage, replayLevel);
      getTestQuestions({
        stage: replayStage,
        level: replayLevel,
        test: lastTest,
      }).then(data => {
        if (Array.isArray(data) === false) {
          console.log(
            'some error: return data from getTestQuestion is not an array',
          );
          return;
        }
        props.setCurrentQuestion(data[0]);
        props.prepareData(data);
        handleReplay(replayStage, replayLevel);
      });
    } else {
      getTestQuestions({stage: stage, level: level, test: test}).then(data => {
        if (Array.isArray(data) === false) {
          console.log(
            'some error: return data from getTestQuestion is not an array',
          );
          return;
        }
        props.setCurrentQuestion(data[0]);
        props.prepareData(data);
        handlePlay(stage, level, test);
      });
    }
  };

  const isDisabled = (iconStage, iconLevel) => {
    if (iconStage > stage) {
      return true;
    }
    return iconStage === stage && iconLevel > level;
  };

  return (
    <LessonStages
      loading={loading}
      handlePress={handlePress}
      isDisabled={isDisabled}
      stage={stage}
      level={level}
      test={test}
    />
  );
};

LessonStagesWrapper.propTypes = {
  progress: object.isRequired,
  handlePlay: func.isRequired,
  handleReplay: func.isRequired,
  prepareData: func.isRequired,
  setCurrentQuestion: func.isRequired,
};

export default connect(
  state => ({progress: state.progressReducer}),
  {
    handlePlay: play,
    handleReplay: replay,
    prepareData: setQuestions,
    setCurrentQuestion: setCurrentQuestion,
  },
)(LessonStagesWrapper);
