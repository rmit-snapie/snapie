import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
class MyButton extends Component {
  render() {
    const {
      text,
      // onPress,
      buttonStyle,
      textStyle,
      width,
      disabled
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          {
            padding: 5,
            height: 30,
            borderRadius: 8,
            margin: 20,
            width: width,
            backgroundColor:
              disabled != null && disabled === "true" ? "#e0e0e0" : "#303656"
          },
          buttonStyle
        ]}
        onPress={() => {
          if (disabled == null || disabled === "false") {
            // onPress();
            this.props.submitTodo();
          }
        }}
      >
        <Text
          style={[
            {
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffffff",
              textAlign: "center"
              // paddingTop: 2
            },
            textStyle
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  // onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  width: PropTypes.string,
  disabled: PropTypes.string
};
export default MyButton;
