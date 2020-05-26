import React from 'react';
import {func, object, bool, number} from 'prop-types';
import styles from './LessonStagesStyle';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {LEVELS_ICONS} from '../../assets/levels-icons';
import {STAGE_ICONS} from '../../assets/stage-icons';
import ImageButton from '../../../shared/components/image-button/ImageButton';
import ProgressIndicator from './progress/ProgressIndicator';
import Loading from '../../../shared/components/loading/Loading';
import {goToFirstScreenInStack} from '../../../helpers/NavigateHelper';
const BackToHomeIcon = require('../../../shared/assets/icons/BackToHomeIconSecondary.png');

const LessonStages = ({
  loading,
  handlePress,
  stage,
  level,
  test,
  isDisabled,
  navigation,
}) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.backToHomeWrapper}>
        <TouchableOpacity onPress={() => goToFirstScreenInStack(navigation)}>
          <Image source={BackToHomeIcon} style={styles.backToHomeIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.stageWrapper}>
          <Image style={styles.stageIcon} source={STAGE_ICONS.STAGE_ONE_ICON} />
          <View style={styles.stageLevels}>
            {LEVELS_ICONS.stageOneC.map((icon, index) => (
              <View style={styles.iconWrapper} key={index}>
                <ImageButton
                  key={index}
                  handlePress={() => handlePress(0, index)}
                  source={icon}
                  disabled={isDisabled(0, index)}
                />
                <ProgressIndicator
                  testDone={test}
                  maxTests={3}
                  levelLocked={isDisabled(0, index)}
                  levelDone={index < level}
                  stageDone={stage > 0}
                />
              </View>
            ))}
          </View>
        </View>
        <View
          pointerEvents={stage >= 1 ? 'auto' : 'none'}
          style={
            stage >= 1
              ? styles.stageWrapper
              : [styles.stageWrapper, styles.lockedStage]
          }>
          <Image style={styles.stageIcon} source={STAGE_ICONS.STAGE_TWO_ICON} />
          {stage >= 1 ? (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageTwoC.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(1, index)}
                    source={icon}
                    disabled={isDisabled(1, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(1, index)}
                    levelDone={index < level}
                    stageDone={stage > 1}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageTwoG.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(1, index)}
                    source={icon}
                    disabled={isDisabled(1, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(1, index)}
                    levelDone={index < level}
                    stageDone={stage > 1}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
        <View
          pointerEvents={stage >= 2 ? 'auto' : 'none'}
          style={
            stage >= 2
              ? styles.stageWrapper
              : [styles.stageWrapper, styles.lockedStage]
          }>
          <Image
            style={styles.stageIcon}
            source={STAGE_ICONS.STAGE_THREE_ICON}
          />
          {stage >= 2 ? (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeC.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(2, index)}
                    source={icon}
                    disabled={isDisabled(2, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(2, index)}
                    levelDone={index < level}
                    stageDone={stage > 2}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.stageLevels}>
              {LEVELS_ICONS.stageThreeG.map((icon, index) => (
                <View style={styles.iconWrapper} key={index}>
                  <ImageButton
                    key={index}
                    handlePress={() => handlePress(2, index)}
                    source={icon}
                    disabled={isDisabled(2, index)}
                  />
                  <ProgressIndicator
                    testDone={test}
                    maxTests={3}
                    levelLocked={isDisabled(2, index)}
                    levelDone={index < level}
                    stageDone={stage > 2}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

LessonStages.propTypes = {
  loading: bool.isRequired,
  handlePress: func.isRequired,
  stage: number.isRequired,
  level: number.isRequired,
  test: number.isRequired,
  isDisabled: func.isRequired,
  navigation: object.isRequired,
};

export default LessonStages;
