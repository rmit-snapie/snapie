import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './PairSelectionStyle';
import {getQuestions, shuffle} from '../../helpers/QuestionHelper';

const pairSelectionQuestion = getQuestions('pairSelection')[0];
const {
  questionContent,
  answers,
  imagesAsset,
  correctAnswer,
} = pairSelectionQuestion;

const PairSelection = () => {
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });

  const [pictureShakeAnimation, setPictureShakeAnimation] = useState(
    new Animated.Value(0),
  );

  const handleAnswerPressed = (index, answer) => {
    console.log(index, answer);
  };
  return (
    <View style={styles.container}>
      <View style={styles.questionWrapper}>
        <Text style={styles.questionContent}>{questionContent}</Text>
      </View>
      <View style={styles.answersWrapper}>
        <View style={styles.column1}>
          {answers.map((ans, index) => (
            <TouchableOpacity
              activeOpacity={0}
              onPress={() => handleAnswerPressed(index, ans)}
              style={
                currentAnswer.index === index
                  ? [styles.answer, styles.chosenAnswer]
                  : [styles.answer, styles.notChosenAnswer]
              }
              key={ans}>
              <Text
                style={
                  currentAnswer.index === index
                    ? styles.chosenAnswerTitle
                    : styles.answerTitle
                }>
                {ans}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.column2}>
          {shuffle(imagesAsset).map((asset, index) => (
            <TouchableOpacity style={styles.assetWrapper} key={index}>
              <Animated.Image style={[styles.asset]} source={asset.asset} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.child3}>
        <Text>Child 3</Text>
      </View>
    </View>
  );
};

export default PairSelection;
