import React from 'react';
import {Image, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import {STAGE_ONE} from '../domain-models/stage-1/StageOneQuestions';
import {STAGE_TWO} from '../domain-models/stage-2/StageTwoQuestions';
import RNFetchBlob from 'rn-fetch-blob';
const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
export const dirs = RNFetchBlob.fs.dirs;

export const getNumberOfQuestions = (
  stage: number,
  level: number,
  test: number,
) => {
  if (stage === 0) {
    return STAGE_ONE[level][test].length - 1;
  } else if (stage === 1) {
    return STAGE_TWO[level][test].length - 1;
  } else {
    if (level === 0) {
      return metaData.data.levelOneTestQuestionsCount[test] - 1;
    } else if (level === 1) {
      return metaData.data.levelTwoTestQuestionsCount[test] - 1;
    } else if (level === 2) {
      return metaData.data.levelThreeTestQuestionsCount[test] - 1;
    } else if (level === 3) {
      return metaData.data.levelFourTestQuestionsCount[test] - 1;
    } else if (level === 3) {
      return metaData.data.levelFiveTestQuestionsCount[test] - 1;
    }
  }
};

export const getNumberOfTests = (stage: number, level: number) => {
  if (stage === 0) {
    return STAGE_ONE[level].length - 1;
  } else if (stage === 1) {
    return STAGE_TWO[level].length - 1;
  } else {
    return 2;
  }
};

export const getNumberOfLevels = (stage: number) => {
  if (stage === 0) {
    return STAGE_ONE.length - 1;
  } else if (stage === 1) {
    return STAGE_TWO.length - 1;
  } else {
    return metaData.data.levelsCount - 1;
  }
};

export const createBlanks = answer => {
  return answer.split('').map(_ => '_');
};

export const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const renderImageWrapper = (stage, imageSource, style, animated) => {
  if (stage > 1) {
    if (animated) {
      return (
        <AnimatedFastImage
          style={[style]}
          source={{
            uri: imageSource,
            priority: FastImage.priority.normal,
          }}
        />
      );
    }
    return (
      <FastImage
        source={{
          uri: imageSource,
        }}
        style={style}
      />
    );
  } else {
    if (animated) {
      return <Animated.Image style={[style]} source={imageSource} />;
    }
    return <Image source={imageSource} style={style} />;
  }
};

const stageFetchPath =
  'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/stages/';
const localStagePath = dirs.DocumentDir + '/stages/';
// make the directories:
RNFetchBlob.fs.exists(localStagePath).then(existed => {
  if (!existed) {
    RNFetchBlob.fs.mkdir(localStagePath).catch(err => {
      console.log(err);
    });
  }
});

//this function is for removing json file, testing and debugging only
// const removeJSONFile = stageID => {
//   let path = localStagePath + stageID + '.json';
//   RNFetchBlob.fs.exists(path).then(existed => {
//     if (existed) {
//       RNFetchBlob.fs
//         .unlink(path)
//         .then(() => {
//           console.log('removed');
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     } else {
//       console.log('not exist');
//     }
//   });
// };

const fetchQuestion = async stageID => {
  /**
   * fetch json file from API then save to doctument dir as JSON file
   * @param: stageID (int)
   * @return: json file, saved in documentDir/stages/stageID.json
   * default: 1.json
   */

  // set default stage file name if stageID not exist
  const stageFileName = stageID ? stageID + '.json' : '1.json';
  let fetchPath = stageFetchPath + stageFileName;
  // check path:
  return RNFetchBlob.config({
    path: localStagePath + stageFileName,
    wifiOnly: true,
  })
    .fetch('GET', fetchPath)
    .then(res => {
      return res.info().status;
    })
    .catch((e, code) => {
      console.log(e, code);
    });
};

export const getTestQuestions = async progress => {
  /**
   * get stage question data, for stage 1 and 2: return default; from stage 3: fetch if required
   * @param: stageID (int)
   * @return: json object (full stage data)
   * default: stage_one.json
   */
  const {stage, level, test} = progress;
  // for debugging, remove file using this readJsonFile()
  switch (stage) {
    case 0:
      return STAGE_ONE[level][test];
    case 1:
      return STAGE_TWO[level][test];
  }
  // online questions:
  return checkStageFileExisted(stage + 1).then(isExisted => {
    if (!isExisted) {
      return fetchQuestion(stage + 1).then(result => {
        if (result) {
          return readJsonFile(localStagePath + (stage + 1) + '.json')
            .then(data => {
              return data.levels[level][test];
            })
            .catch(e => console.log(e));
        } else {
          return STAGE_ONE;
        }
      });
    } else {
      return readJsonFile(localStagePath + (stage + 1) + '.json')
        .then(result => {
          return result.levels[level][test];
        })
        .catch(e => console.log(e));
    }
  });
};
const checkStageFileExisted = async stageID => {
  /**
   * check if the stage json file existed in local memory
   * @param:  stageID (int)
   */
  let myFilePath = localStagePath + stageID + '.json';
  return RNFetchBlob.fs.exists(myFilePath).then(existed => {
    return existed;
  });
};

export const metaData = {};
export const readJsonFile = async filePath => {
  // filePath = filePath ? filePath : localStagePath + '1.json';
  // encoding:utf8 | base64 | ascii | uri
  return RNFetchBlob.fs
    .readFile(filePath, 'utf8')
    .then(data => {
      let myJsonObject = JSON.parse(data);
      try {
        metaData.data = myJsonObject.metaData;
      } catch (e) {
        console.log(e);
      }
      return myJsonObject;
    })
    .catch(e => {
      console.log('error: ', e);
    });
};
