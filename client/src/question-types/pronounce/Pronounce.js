import React from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';
import styles from './PronounceStyle';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Voice from '@react-native-community/voice';
import Cheers from '../cheers';
import {renderImageWrapper} from '../../helpers/QuestionHelper';
import {readText} from '../../helpers/TextToSpeech';
import RecordButton from '../../shared/assets/RecordButton.png';

class Pronounce extends React.Component {
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

  componentDidMount() {
    readText(this.props.currentQuestion.questionContent);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  openCheers() {
    this.setState({
      cheers: {display: true, sad: false},
    });
  }

  handleAnswerCheck = () => {
    const {voice} = this.state;
    const {correctAnswer} = this.props.currentQuestion;
    if (voice) {
      if (
        voice.toLowerCase() === correctAnswer ||
        voice
          .toLowerCase()
          .split(' ')
          .includes(correctAnswer)
      ) {
        this.setState({cheers: {display: true, sad: false}});
      } else {
        this.setState({cheers: {display: true, sad: true}});
      }
    }
    return Voice.destroy().then(Voice.removeAllListeners);
  };

  _onSpeechStart = () => {
    console.log('onSpeechEnd');
  };

  _onSpeechEnd = () => {
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

  _onRecordVoice = async () => {
    const {isRecord} = this.state;
    if (isRecord) {
      await Voice.stop();
    } else {
      await Voice.start('en-US');
    }
    this.setState({
      isRecord: !isRecord,
    });
  };

  render() {
    const {stage} = this.props.progress.replay.play
      ? this.props.progress.replay
      : this.props.progress;
    const {
      questionContent,
      imageAsset,
      correctAnswer,
    } = this.props.currentQuestion;
    const {
      isRecord,
      voice,
      cheers: {display, sad},
    } = this.state;
    const voiceLabel = voice
      ? voice
      : isRecord
      ? 'Say something...'
      : 'press Start button';
    if (this.props.currentQuestion === undefined) {
      return (
        <View style={styles.container}>
          <Text>ERROR PRONOUNCE COULD NOT LOAD</Text>
        </View>
      );
    }
    if (display) {
      return <Cheers cheers={display} sad={sad} />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.imageAssetWrapper}>
            <TouchableOpacity
              onPress={() => readText(correctAnswer)}
              style={styles.imageWrapper}>
              {renderImageWrapper(stage, imageAsset, styles.image)}
            </TouchableOpacity>
          </View>
          <View style={styles.questionWrapper}>
            <Text
              onPress={() => readText(questionContent)}
              style={styles.question}>
              {questionContent}
            </Text>
            <Text style={styles.question}>{voiceLabel}</Text>
          </View>
          <View style={styles.recordButtonWrapper}>
            <TouchableOpacity onPress={this._onRecordVoice}>
              <Image style={styles.record} source={RecordButton} />
            </TouchableOpacity>
          </View>
          <View style={styles.checkWrapper}>
            <TouchableOpacity
              style={
                voice === undefined
                  ? [styles.confirmButton, styles.disabledConfirm]
                  : [styles.confirmButton, styles.confirmAnswer]
              }
              disabled={voice === undefined}
              onPress={this.handleAnswerCheck}>
              <Text style={styles.confirmTitle}> Confirm </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

Pronounce.propTypes = {
  currentQuestion: object.isRequired,
  progress: object.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
    currentQuestion: state.questionsContentReducer.currentQuestion,
  }),
  null,
)(Pronounce);
