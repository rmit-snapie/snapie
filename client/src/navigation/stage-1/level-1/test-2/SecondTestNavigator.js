import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setCurrentStack} from '../../../../redux/actions/QuestionTypeActions';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SPELLING_ORDER,
  MULTIPLE_CHOICE,
  PAIR_SELECTION,
  FILL_THE_BLANK,
  HOME_SCREEN,
  LESSON_SCREEN,
  REVIEW_SCREEN,
  EXPLORE_SCREEN,
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
import {LEVEL_ONE_TEST_TWO_QUESTIONS} from '../../../../domain-models/stage-1/level-1/test-2';
const secondTest = LEVEL_ONE_TEST_TWO_QUESTIONS;

const SecondTestStack = createStackNavigator();

function SecondTestNavigator({handleSetCurrentStack}) {
  useEffect(() => {
    handleSetCurrentStack([
      SPELLING_ORDER,
      MULTIPLE_CHOICE,
      PAIR_SELECTION,
      FILL_THE_BLANK,
    ]);
  }, [handleSetCurrentStack]);

  return (
    <SecondTestStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SecondTestStack.Screen name={HOME_SCREEN} component={Home} />
      <SecondTestStack.Screen name={LESSON_SCREEN} component={Lesson} />
      <SecondTestStack.Screen name={REVIEW_SCREEN} component={Review} />
      <SecondTestStack.Screen name={EXPLORE_SCREEN} component={Explore} />
      <SecondTestStack.Screen
        name={FILL_THE_BLANK}
        component={FillTheBlank}
        initialParams={{
          question: secondTest[1],
        }}
      />
      <SecondTestStack.Screen
        name={MULTIPLE_CHOICE}
        component={MultipleChoice}
        initialParams={{
          question: secondTest[0],
        }}
      />
      <SecondTestStack.Screen
        name={SPELLING_ORDER}
        component={SpellingOrder}
        initialParams={{
          question: secondTest[2],
        }}
      />
      <SecondTestStack.Screen
        name={PAIR_SELECTION}
        component={PairSelection}
        initialParams={{
          question: secondTest[3],
        }}
      />
    </SecondTestStack.Navigator>
  );
}

SecondTestNavigator.propTypes = {
  handleSetCurrentStack: PropTypes.func.isRequired,
};

export default connect(
  null,
  {handleSetCurrentStack: setCurrentStack},
)(SecondTestNavigator);
