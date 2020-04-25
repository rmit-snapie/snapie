import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import styles from './SpellingOrderStyle';
import Cheers from '../cheers/Cheers';
import {SPELLING_ORDER} from '../../../environments/Routes';
import {createBlanks} from '../../helpers/QuestionHelper';
import {popCurrentStack} from '../../redux/actions/QuestionTypeActions';
import {resetRoute} from '../../helpers/NavigateHelper';
import {testCompleted} from '../../redux/actions/ProgressActions';
import {readText} from '../../helpers/TextToSpeech';

const SpellingOrder = ({
  currentStack,
  handlePopCurrentStack,
  handleTestCompleted,
  route: {
    params: {question},
  },
  navigation,
}) => {
  const {questionContent, answers, correctAnswer, imageAsset} = question;
  const initialBlanks = createBlanks(correctAnswer);
  const [word, setWord] = useState([]);
  const [blanks, setBlanks] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [characters, setCharacters] = useState([]);

  const [cheers, setCheers] = useState({display: false, sad: false});

  useEffect(() => {
    readText(questionContent);
  }, [questionContent]);

  useEffect(() => {
    if (word.length === 0 && blanks.length === 0) {
      setWord([...initialBlanks]);
      setBlanks([...initialBlanks]);
      setCharacters([...answers]);
    }
  }, [answers, blanks.length, word.length, initialBlanks]);

  const handleAnswerPressed = (index, answer) => {
    const tempCurrentOrder = currentOrder;
    const tempBlanks = blanks;
    currentOrder.push(answer);
    setCurrentOrder([...tempCurrentOrder]);
    blanks.pop();
    setBlanks([...tempBlanks]);
    const tempWord = tempCurrentOrder.concat(blanks);
    setWord([...tempWord]);

    const tempCharacters = characters;
    tempCharacters.splice(index, 1);
    setCharacters([...tempCharacters]);
  };

  const clearWord = () => {
    setWord([...initialBlanks]);
    setBlanks([...initialBlanks]);
    setCharacters([...answers]);
    setCurrentOrder([]);
  };

  const handleAnswerCheck = () => {
    if (correctAnswer !== currentOrder.join('')) {
      setCheers({display: true, sad: true});
    } else {
      setCheers({display: true, sad: false});
    }
    if (currentStack.length !== 1) {
      handlePopCurrentStack(SPELLING_ORDER);
      const tempStack = currentStack.filter(stack => stack !== SPELLING_ORDER);
      setTimeout(() => resetRoute(navigation, _.sample(tempStack)), 1000);
    } else {
      setTimeout(() => handleTestCompleted(2), 1000);
    }
  };

  return (
    <View style={styles.container}>
      {cheers.display && <Cheers cheers={cheers.display} sad={cheers.sad} />}
      {!cheers.display && (
        <>
          <View style={styles.mediaWrapper}>
            <Image style={styles.image} source={{uri: imageAsset}} />
          </View>
          <View style={styles.questionWrapper}>
            <Text style={styles.questionContent}>{questionContent}</Text>
            <View style={styles.blanksWrapper}>
              {word.map((character, index) => (
                <Text key={index} style={styles.blanks}>
                  {character}
                </Text>
              ))}
              {currentOrder.length !== 0 && (
                <TouchableOpacity
                  onPress={() => clearWord()}
                  style={styles.clear}
                  activeOpacity={0}>
                  <Text style={styles.answerTitle}>X</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.answersWrapper}>
            {characters.map((character, index) => (
              <TouchableOpacity
                onPress={() => handleAnswerPressed(index, character)}
                activeOpacity={0}
                key={index}
                style={styles.answer}>
                <Text style={styles.answerTitle}>{character}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.confirmButtonWrapper}>
            <TouchableOpacity
              style={
                currentOrder.length === 0
                  ? [styles.confirmButton, styles.disabledConfirm]
                  : [styles.confirmButton, styles.confirmAnswer]
              }
              disabled={currentOrder.length === null}
              onPress={() => handleAnswerCheck()}>
              <Text style={styles.confirmTitle}> Confirm </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

SpellingOrder.propTypes = {
  currentStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlePopCurrentStack: PropTypes.func.isRequired,
  handleTestCompleted: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  state => ({currentStack: state.questionTypeStackReducer.currentStack}),
  {handlePopCurrentStack: popCurrentStack, handleTestCompleted: testCompleted},
)(SpellingOrder);
