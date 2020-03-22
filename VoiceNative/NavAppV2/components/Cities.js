import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {colors} from './Theme';
import Message from './Message';
const navigationOptions = {
  title: 'Cities',
  headerTitleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
};
// const cities = [{city: 'tam', country: 'fafa'}];
export default class Cities extends React.Component {
  constructor(props) {
    super(props);
  }

  navigate = item => {
    this.props.navigation.navigate('City', {city: item});
  };
  render() {
    const cities = this.props.route.params.cities;
    console.log('addcity:', this.props, cities);
    return (
      <ScrollView contentContainerStyle={[!cities.length && {flex: 1}]}>
        <View style={[!cities.length && {justifyContent: 'center', flex: 1}]}>
          {!cities.length && <Message message="No saved cities!" />}
          {cities.map((item, index) => (
            <TouchableWithoutFeedback
              onPress={() => this.navigate(item)}
              key={index}>
              <View style={styles.cityContainer}>
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  cityContainer: {
    padding: 60,
    // borderBottomWidth: 2,
    // borderBottomColor: colors.primary,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  city: {
    fontSize: 20,
    // alignSelf: 'center',
  },
  country: {
    color: 'rgba(0, 0, 0, .5)',
  },
});
