import React from 'react';
import Cities from './Cities';
import City from './City';
import AddCity from './AddCity';
import {colors} from './Theme';
import {} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const options = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
  },
};
const CitiesNav = createStackNavigator(
  {
    Cities: {screen: Cities},
    City: {screen: City},
  },
  options,
);
const Tabs = createBottomTabNavigator();

// Tabs.Screen(Cities, CitiesNav);
// Tabs.Screen(AddCity, AddCity);
// ({
//   Cities: {screen: CitiesNav},
//   AddCity: {screen: AddCity},
// });
export default Tabs;
