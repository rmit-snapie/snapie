import React from 'react';
import {Image, Button, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, CreatePost} from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
const Stack = createStackNavigator();

function Logo() {
  return (
    <Image
      source={require('./assets/icon.png')}
      style={{width: 24, height: 24}}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/*Initial route is the root of the stack*/}
      <Stack.Navigator
        // Use header style here to configure the style for the entire stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Home Screen">
        {/*You can change title by setting title inside options object*/}
        <Stack.Screen
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Home Screen"
          component={HomeScreen}
        />
        {/*You can pass props down a component using navigate or push and pass props to those functions*/}
        {/*But you can also set the initial params as props by passing inititialParams object*/}
        <Stack.Screen
          options={{
            headerTitle: props => <Logo {...props} />,
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
          initialParams={{loading: true}}
          name="Loading Screen"
          component={LoadingScreen}
        />
        <Stack.Screen name="Details Screen" component={DetailsScreen} />
        <Stack.Screen name="Create Post Screen" component={CreatePost} />
        <Stack.Screen
          initialParams={{name: 'Profile of Curry'}}
          // Rewrite options by using navigation.setOptions()
          options={({route}) => ({title: route.params.name})}
          name="Profile Screen"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
