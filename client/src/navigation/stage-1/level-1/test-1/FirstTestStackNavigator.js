import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCurrentStack} from '../../../../redux/actions/QuestionTypeActions';
import {createStackNavigator} from '@react-navigation/stack';

import {
  EXPLORE_SCREEN,
  FILL_THE_BLANK,
  HOME_SCREEN,
  LESSON_SCREEN,
  MULTIPLE_CHOICE,
  PAIR_SELECTION,
  REVIEW_SCREEN,
  SPELLING_ORDER,
} from '../../../../../environments/Routes';
//Screens
import Home from '../../../../views/Home';
import Lesson from '../../../../views/Lesson';
import Review from '../../../../views/Review';
import Explore from '../../../../views/Explore';
//Components
import MultipleChoice from '../../../../components/multiple-choice/MultipleChoice';
import FillTheBlank from '../../../../components/fill-the-blank/FillTheBlank';
import SpellingOrder from '../../../../components/spelling-order/SpellingOrder';
import PairSelection from '../../../../components/pair-selection/PairSelection';
//Question Content
import {LEVEL_ONE_TEST_ONE_QUESTIONS} from '../../../../domain-models/stage-1/level-1/test-1';
const firstTest = LEVEL_ONE_TEST_ONE_QUESTIONS;
const FirstTestStack = createStackNavigator();

function FirstTestStackNavigator({handleSetCurrentStack}) {
  useEffect(() => {
    handleSetCurrentStack([
      FILL_THE_BLANK,
      MULTIPLE_CHOICE,
      PAIR_SELECTION,
      SPELLING_ORDER,
    ]);
  }, [handleSetCurrentStack]);

  return (
    <FirstTestStack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <FirstTestStack.Screen name={HOME_SCREEN} component={Home} />
      <FirstTestStack.Screen name={LESSON_SCREEN} component={Lesson} />
      <FirstTestStack.Screen name={REVIEW_SCREEN} component={Review} />
      <FirstTestStack.Screen name={EXPLORE_SCREEN} component={Explore} />
      <FirstTestStack.Screen
        name={MULTIPLE_CHOICE}
        component={MultipleChoice}
        initialParams={{
          question: firstTest[0],
        }}
      />
      <FirstTestStack.Screen
        name={FILL_THE_BLANK}
        component={FillTheBlank}
        initialParams={{
          question: firstTest[1],
        }}
      />
      <FirstTestStack.Screen
        name={SPELLING_ORDER}
        component={SpellingOrder}
        initialParams={{
          question: firstTest[2],
        }}
      />
      <FirstTestStack.Screen
        name={PAIR_SELECTION}
        component={PairSelection}
        initialParams={{
          question: firstTest[3],
        }}
      />
    </FirstTestStack.Navigator>
  );
}

FirstTestStackNavigator.propTypes = {
  handleSetCurrentStack: PropTypes.func.isRequired,
};

export default connect(
  null,
  {handleSetCurrentStack: setCurrentStack},
)(FirstTestStackNavigator);
