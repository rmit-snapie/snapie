import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './SpellingOrderStyle';
import Cheers from '../cheers/Cheers';
import {createBlanks} from '../../helpers/QuestionHelper';
import {readText} from '../../helpers/TextToSpeech';

const SpellingOrder = ({questions, progress}) => {
  // get question data from redux store, base on progress and questions
  let question = !progress.replay.start
    ? questions[progress.question]
    : questions[progress.replay.question];
  console.log('SpellingOrder > current question: ', question);

  const {questionContent, answers, correctAnswer, imageAsset} = question;
  const initialBlanks = createBlanks(correctAnswer);
  const [word, setWord] = useState([]);
  const [blanks, setBlanks] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [characters, setCharacters] = useState([]);

  const [cheers, setCheers] = useState({display: false, sad: false});

  useEffect(() => {
    readText(questionContent);
  }, [question, questionContent]);

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
  };

  return (
    <View style={styles.container}>
      {cheers.display && (
        <Cheers
          cheers={cheers.display}
          sad={cheers.sad}
          correctAnswer={correctAnswer}
        />
      )}
      {!cheers.display && (
        <>
          <View style={styles.mediaWrapper}>
            <TouchableWithoutFeedback onPress={() => readText(questionContent)}>
              <Image
                style={styles.image}
                onPress={() => readText(correctAnswer)}
                source={imageAsset}
              />
            </TouchableWithoutFeedback>
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
                  <Text>X</Text>
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
  questions: PropTypes.array.isRequired,
  progress: PropTypes.object.isRequired,
};

// export default SpellingOrder;
export default connect(
  state => ({
    questions: state.questionsContentReducer,
    progress: state.progressReducer,
  }),
  null,
)(SpellingOrder);
