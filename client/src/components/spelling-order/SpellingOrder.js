import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './SpellingOrderStyle';
import Cheers from '../cheers/Cheers';
import {createBlanks, getQuestions} from '../../helpers/QuestionHelper';

const spellingOrderQuestion = getQuestions('spellingOrder')[0];
const {questionContent, answers, correctAnswer} = spellingOrderQuestion;
const initialBlanks = createBlanks(answers);

const SpellingOrder = () => {
  //word is the combination of current order + blanks, default is blanks
  const [word, setWord] = useState([]);
  //blanks is for setting blanks
  const [blanks, setBlanks] = useState([]);
  //current order is to save the order of which user enter the characters
  const [currentOrder, setCurrentOrder] = useState([]);
  //characters is for the answers, by choosing a character, that character will disappear
  const [characters, setCharacters] = useState([]);

  const [cheers, setCheers] = useState({display: false, sad: false});

  useEffect(() => {
    setWord([...initialBlanks]);
    setBlanks([...initialBlanks]);
    setCharacters([...answers]);
  }, []);

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
    if (correctAnswer === currentOrder.join('')) {
      setCheers({display: true, sad: false});
    } else {
      setCheers({display: true, sad: true});
    }
  };

  return (
    <View style={styles.container}>
      {cheers.display && <Cheers cheers={cheers.display} sad={cheers.sad} />}
      {!cheers.display && (
        <>
          <View style={styles.mediaWrapper}>
            <Text>Box 1</Text>
            <Text>Box 1</Text>
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

export default SpellingOrder;
