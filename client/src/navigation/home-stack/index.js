// import React, {useEffect} from 'react';
// import {connect} from 'react-redux';
// import {createStackNavigator, createSwitchNavigator} from '@react-navigation/stack';
// import {
//   EXPLORE_SCREEN,
//   FILL_THE_BLANK,
//   HOME_SCREEN,
//   LESSON_SCREEN,
//   MULTIPLE_CHOICE,
//   PAIR_SELECTION,
//   REVIEW_SCREEN,
//   SPELLING_ORDER,
// } from '../../../environments/Routes';
// import Home from '../../views/Home';
// import Explore from '../../views/Explore';
// import Lesson from '../../views/Lesson';
// import Review from '../../views/Review';
//
// import FirstTestStackNavigator from '../stage-1/level-1/test-2/SecondTestNavigator';
//
// import MultipleChoice from '../../components/multiple-choice/MultipleChoice';
// import FillTheBlank from '../../components/fill-the-blank/FillTheBlank';
// import SpellingOrder from '../../components/spelling-order/SpellingOrder';
// import PairSelection from '../../components/pair-selection/PairSelection';
// import {LEVEL_ONE_TEST_ONE_QUESTIONS} from '../../domain-models/stage-1/level-1';
// const firstTest = LEVEL_ONE_TEST_ONE_QUESTIONS.firstTest;
// import {setCurrentStack} from '../../redux/actions/QuestionTypeActions';
//
// const HomeStack = createStackNavigator();
// const ABCStack = createStackNavigator();
// const DEFStack = createStackNavigator();
//
// const ABCStackScreen = () => (
//   <ABCStack.Navigator>
//     <ABCStack.Screen name={EXPLORE_SCREEN} component={Explore}/>
//   </ABCStack.Navigator>
// );
//
// const DEFStackScreen = () => (
//   <ABCStack.Navigator>
//     <ABCStack.Screen name={REVIEW_SCREEN} component={Review}/>
//   </ABCStack.Navigator>
// );
//
// function HomeStackNavigator(props) {
//   const {handleSetCurrentStack} = props;
//   useEffect(() => {
//     handleSetCurrentStack([
//       FILL_THE_BLANK,
//       MULTIPLE_CHOICE,
//       PAIR_SELECTION,
//       SPELLING_ORDER,
//     ]);
//   }, [handleSetCurrentStack]);
//   return (
//
//   );
// }
//
// export default connect(null, {handleSetCurrentStack: setCurrentStack})(HomeStackNavigator);
