import React from 'react';
import PropTypes from 'prop-types';
import styles from './PronounceStyle';
import {View, Button, Text, Image, TouchableOpacity} from 'react-native';
import Voice from '@react-native-community/voice';
import Cheers from '../cheers/Cheers';

export default class Pronounce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecord: false,
      voice: undefined,
      cheers: {display: false, sad: false},
    };

    Voice.onSpeechStart = this._onSpeechStart;
    Voice.onSpeechEnd = this._onSpeechEnd;
    Voice.onSpeechResults = this._onSpeechResults;
    Voice.onSpeechError = this._onSpeechError;
    this.openCheers = this.openCheers.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  openCheers = () => {
    this.setState({
      cheers: {display: true, sad: false},
    });
    // I have to include this to prevent an infinite loop inside componentDidUpdate
    this.setState({isRecord: false, voice: undefined});
  };

  componentDidUpdate() {
    const {voice} = this.state;
    const {correctAnswer} = this.props.question;
    if (voice) {
      if (
        voice.toLowerCase() === correctAnswer ||
        voice
          .toLowerCase()
          .split(' ')
          .includes(correctAnswer)
      ) {
        this.openCheers();
        Voice.destroy().then(Voice.removeAllListeners);
      }
    }
    return false;
  }

  _onSpeechStart = event => {
    console.log('onSpeechEnd');
  };

  _onSpeechEnd = event => {
    console.log('onSpeechEnd');
  };

  _onSpeechResults = event => {
    console.log('onSpeechResults');
    this.setState({
      voice: event.value[0],
    });
  };

  _onSpeechError = event => {
    console.log('_onSpeechError');
    console.log(event.error);
  };

  _onRecordVoice = () => {
    const {isRecord} = this.state;
    if (isRecord) {
      Voice.stop();
    } else {
      Voice.start('en-US');
    }
    this.setState({
      isRecord: !isRecord,
    });
  };

  render() {
    const {
      question: {questionContent, imageAsset},
    } = this.props;
    const {
      isRecord,
      voice,
      cheers: {display, sad},
    } = this.state;
    console.log(display);
    const buttonLabel = isRecord ? 'Stop' : 'Start';
    const voiceLabel = voice
      ? voice
      : isRecord
      ? 'Say something...'
      : 'press Start button';
    if (display) {
      return <Cheers cheers={display} sad={sad} />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.imageAssetWrapper}>
            <TouchableOpacity onPress={() => readText(correctAnswer)}>
            <Image source={imageAsset} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View style={styles.questionWrapper}>
            <Text style={styles.question}>{questionContent}</Text>
            <Text style={styles.question}>{voiceLabel}</Text>
          </View>
          <View style={styles.pronounceButtonWrapper}>
            <Button onPress={this._onRecordVoice} title={buttonLabel} />
          </View>
        </View>
      );
    }
  }
}

Pronounce.propTypes = {
  question: PropTypes.object.isRequired,
};
