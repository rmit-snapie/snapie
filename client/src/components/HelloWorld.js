import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../redux/actions/UserActions';

class HelloWorld extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Logged In: </Text>
        <Text>{`${this.props.loggedIn}`}</Text>
        <Button
          title="Login"
          onPress={
            this.props.loggedIn === false
              ? () => this.props.login(true)
              : () => this.props.login(false)
          }
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    loggedIn: state.userReducer.loggedIn,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloWorld);
