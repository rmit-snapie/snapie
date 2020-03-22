/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/TabsConfig';
import Message from './components/Message';
// import { createStackNavigator } from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import AddCity from './components/AddCity';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomNav = createBottomTabNavigator();
import Cities from './components/Cities';
import City from './components/City';
import {colors} from './components/Theme';
const Stack = createStackNavigator();

const options = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
  },
};
export default class App extends Component {
  // render() {
  //   return (
  //     // <View>
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         {/* <Stack.Screen name="Message" component={Message} /> */}
  //         <Stack.Screen name="Cities" component={AddCity} />
  //         {/* cities: this.state.cities,
  // //           addCity: this.addCity,
  // //           addLocation: this.addLocation, */}
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //     // </View>
  //   );
  // }

  constructor(props) {
    super(props);
    this.state = {cities: []};
  }

  addCity = city => {
    console.log('app addcity', city);
    const cities = this.state.cities;
    cities.push(city);
    this.setState({cities});
  };
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id;
    });
    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({cities});
  };
  render() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="Addcity" component={AddCity} />
          <Stack.Screen name="Message" component={Message} />
        </Stack.Navigator> */}
        <Tabs.Navigator>
          <Stack.Screen
            name="Addcity"
            component={AddCity}
            screenOptions={options}
            // screenProps={(myprops = 'dfadf')}
            initialParams={{cities: this.state, addCity: this.addCity}}
          />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen
            name="Cities"
            component={Cities}
            initialParams={this.state}
          />
        </Tabs.Navigator>
        {/* <Tabs
          screenProps={{
            cities: this.state.cities,
            addCity: this.addCity,
            addLocation: this.addLocation,
          }}
        /> */}
      </NavigationContainer>
    );
  }
}

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;
