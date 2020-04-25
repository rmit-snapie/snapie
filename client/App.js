import React from 'react';
//must have for react-navigation
import 'react-native-gesture-handler';

//redux, redux-persist
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';
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
} from './environments/Routes';
import Home from './src/views/home/Home';
import Explore from './src/views/explore/Explore';
import Review from './src/views/review/Review';
import Lesson from './src/views/lesson/Lesson';
import PairSelection_copy from './src/components/pair-selection/PairSelection_copy';
import MultipleChoice_copy from './src/components/multiple-choice/MultipleChoice_copy';
import SpellingOrder_copy from './src/components/spelling-order/SpellingOrder_copy';
import FillTheBlank_copy from './src/components/fill-the-blank/FillTheBlank_copy';

const ApplicationStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ApplicationStack.Navigator>
            <ApplicationStack.Screen name={HOME_SCREEN} component={Home} />
            <ApplicationStack.Screen name={LESSON_SCREEN} component={Lesson} />
            <ApplicationStack.Screen name={REVIEW_SCREEN} component={Review} />
            <ApplicationStack.Screen
              name={EXPLORE_SCREEN}
              component={Explore}
            />
            <ApplicationStack.Screen
              name={MULTIPLE_CHOICE}
              component={MultipleChoice_copy}
            />
            <ApplicationStack.Screen
              name={SPELLING_ORDER}
              component={SpellingOrder_copy}
            />
            <ApplicationStack.Screen
              name={FILL_THE_BLANK}
              component={FillTheBlank_copy}
            />
            <ApplicationStack.Screen
              name={PAIR_SELECTION}
              component={PairSelection_copy}
            />
          </ApplicationStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
