import React from 'react';
import {connect} from 'react-redux';
import {object, func} from 'prop-types';
import styles from './PronounceStyle';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Voice from '@react-native-community/voice';
import Cheers from '../cheers';
import {renderImageWrapper} from '../../helpers/QuestionHelper';
import {readText} from '../../helpers/TextToSpeech';
import RecordButton from '../../shared/assets/buttons/RecordButton.png';
import {stop} from '../../redux/actions/ProgressActions';
const ExitIcon = require('../../shared/assets/icons/ExitIcon.png');

class Pronounce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecord: false,
      voice: undefined,
      cheers: {display: false, sad: false},
      remainingSecs: 0,
      activeTimer: false,
    };

    Voice.onSpeechStart = this._onSpeechStart;
    Voice.onSpeechEnd = this._onSpeechEnd;
    Voice.onSpeechResults = this._onSpeechResults;
    Voice.onSpeechError = this._onSpeechError;
    this.openCheers = this.openCheers.bind(this);
  }

  _interval: any;

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
      this.resetTimer();
    }
    return Voice.destroy().then(Voice.removeAllListeners);
  };

  formatNumber = number => `0${number}`.slice(-2);

  getRemainingSecs = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return {
      minutes: this.formatNumber(minutes),
      seconds: this.formatNumber(seconds),
    };
  };

  startTimer = () => {
    this.setState({activeTimer: true});
    this._interval = setInterval(() => {
      this.setState({remainingSecs: this.state.remainingSecs + 1});
    }, 1000);
  };

  resetTimer = () => {
    this.setState({activeTimer: false});
    this.setState({remainingSecs: 0});
    clearInterval(this._interval);
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
    const {isRecord, activeTimer} = this.state;
    if (activeTimer) {
      this.resetTimer();
    } else {
      this.startTimer();
    }
    if (isRecord) {
      await Voice.stop();
    } else {
      await Voice.start('en-US');
    }
    this.setState({
      isRecord: !isRecord,
    });
  };

  handleStopPlaying = () => {
    const {stage, level, test} = this.props.progress.replay.play
      ? this.props.progress.replay
      : this.props.progress;
    if (this.props.progress.replay.play) {
      this.props.handleStop(stage, level, test, true);
    } else {
      this.props.handleStop(stage, level, test);
    }
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
      remainingSecs,
    } = this.state;
    const {minutes, seconds} = this.getRemainingSecs(remainingSecs);
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
      return (
        <Cheers cheers={display} sad={sad} correctAnswer={correctAnswer} />
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.handleStopPlaying}
            style={styles.exitWrapper}>
            <Image style={styles.exit} source={ExitIcon} />
          </TouchableOpacity>
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
            <Text style={styles.timer}>{`${minutes} : ${seconds}`}</Text>
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
              <Text
                style={
                  voice === undefined
                    ? [styles.disabledConfirmTitle]
                    : [styles.confirmTitle]
                }>
                {' '}
                CHECK{' '}
              </Text>
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
  handleStop: func.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
    currentQuestion: state.questionsContentReducer.currentQuestion,
  }),
  {handleStop: stop},
)(Pronounce);
