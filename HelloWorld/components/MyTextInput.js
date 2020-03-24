import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";

class MyTextInput extends Component {
  render() {
    const {
      label,
      labelStyle,
      maxLength,
      textInputStyle,
      stateHolder,
      stateFieldName,
      inputValue,
      inputChange
    } = this.props;
    return (
      <View style={styles.inputContainer}>
        <Text style={[styles.fieldLabel, labelStyle]}>{label}</Text>
        {/* <TextInput
          maxLength={maxLength}
          onChangeText={inText =>
            stateHolder.setState(() => {
              const obj = {};
              obj[stateFieldName] = inText;
              return obj;
            })
          }
          style={[styles.textInput, textInputStyle]}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          placeholderTextColor="#CACACA"
          selectionColor="#666666"
          value={inputValue}
          onChangeText={inputChange}
        />
      </View>
    );
  }
}
MyTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  maxLength: PropTypes.number,
  textInputStyle: PropTypes.object
  // stateHolder: PropTypes.object.isRequired,
  // stateFieldName: PropTypes.string.isRequired
};
export default MyTextInput;
const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 10,
    marginRight: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 30,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10
  },
  fieldLabel: { marginLeft: 10 },
  textInput: {
    height: 40,
    marginLeft: 10,
    width: "96%",
    marginBottom: 20,
    ...Platform.select({
      ios: {
        marginTop: 4,
        paddingLeft: 10,
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2
      },
      android: {}
    })
  }
});