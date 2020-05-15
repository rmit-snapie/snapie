import React from 'react';
import {Image, Animated, Platform} from 'react-native';
import {STAGE_ONE} from '../domain-models/stage-1/StageOneQuestions';
import {STAGE_TWO} from '../domain-models/stage-2/StageTwoQuestions';

export const getLocalTestQuestions = (
  stage: number,
  level: number,
  test: number,
) => {
  // TODO this only handles two stages, from stage three and further, the import will a downloadable content
  // TODO must adapt to this
  switch (stage) {
    case 0:
      return STAGE_ONE[level][test];
    case 1:
      return STAGE_TWO[level][test];
    default:
      return [];
  }
};

// TODO these two functions are also hard coded, have to fix
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
    // console.log('getNumberOfQuestions > stage: ', stage, ' error, fix here');
    if (level === 0) {
      console.log(metaData, 'ioioi');
      return metaData.data.levelOneTestQuestionsCount[test];
    } else if (level === 1) {
      return metaData.data.levelTwoTestQuestionsCount[test];
    } else if (level === 2) {
      return metaData.data.levelThreeTestQuestionsCount[test];
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
    return metaData.data.levelsCount;
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

import RNFetchBlob from 'rn-fetch-blob';
import RNFS, {
  // MainBundlePath,
  // CachesDirectoryPath,
  // LibraryDirectoryPath,
  DocumentDirectoryPath,
} from 'react-native-fs';
import styles from '../components/pair-selection/PairSelectionStyle';

export const dirs = RNFetchBlob.fs.dirs;
// console.log(dirs.DocumentDir);
// console.log('react-native-fs DocumentDirectoryPath', DocumentDirectoryPath);

const imageFetchPath =
  'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/images/';
const localImagePath = dirs.DocumentDir + '/images/';

const stageFetchPath =
  'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/stages/';
const localStagePath = dirs.DocumentDir + '/stages/';
// make the directories:
RNFetchBlob.fs.exists(localImagePath).then(existed => {
  if (!existed) {
    RNFetchBlob.fs.mkdir(localImagePath).catch(err => {
      console.log(err);
    });
  }
});
RNFetchBlob.fs.exists(localStagePath).then(existed => {
  if (!existed) {
    RNFetchBlob.fs.mkdir(localStagePath).catch(err => {
      console.log(err);
    });
  }
});

export const fetchImage = async imageName => {
  /**
   * fetch image file from API then save to doctument dir with same name
   * @param: imageName
   * @note:fetch path (API) is set as const
   * default: default.png
   */
  // set default image file name if imageName not exist
  const imageFileName = imageName ? imageName : 'default.png';

  // set default stage 1 if stageID not exist
  const fetchPath = imageFetchPath + imageFileName;
  // check path:
  console.log('fetchImage > fech path: ', fetchPath);
  await RNFetchBlob.config({
    // will save to docDir/images/...
    path: localImagePath + imageFileName,
    // use wifi only, this flag will only work on API version 21 or above
    wifiOnly: true,
  })
    .fetch('GET', fetchPath)
    .then(res => {
      console.log('fetchImage > get imgage from s3: ', res);
      let status = res.info().status;
      console.log(status);
      // the temp file path
      console.log('The image file saved to ', res.path());
      //   return the file path being saved.
      return res.path();
    })
    .catch((e, code) => console.log(e, code));
};
const checkImageExisted = async imageName => {
  /**
   * check if the image existed in local memory
   * @param:  imageName
   */
  let imagePath = localImagePath + imageName;
  return RNFetchBlob.fs.exists(imagePath).then(existed => {
    console.log(imagePath, ' existed ? ', existed);
    return existed;
  });
};

export const setOfflineImageAssets = () => {};

export const setStageImagesAssets = async assetList => {
  /**
   * get all images asset ready
   * fetch image file list from API then save to local asset images files with same name
   * @param: assetList : imageName array
   * default: default.png
   */

  // fetch every images....
  assetList.forEach((image, index) => {
    // check in local memory:
    checkImageExisted(image).then(existed => {
      if (existed) {
        // existed: do nothing
        console.log(image, ' existed');
        return true;
      } else {
        // not existed: fetch to local memory
        fetchImage(image).then(result => {
          console.log('image fetched, result: ', result);
          return result;
        });
      }
    });
  });
};

// // // testing:
// // export const testJsonFile = () => {
// //   // removeJSONFile();
// //   saveJsonFile();
// // };

export const renderImageWrapper = (stage, imageSource, style, animated) => {
  // console.log("QuestionHelper > renderImageWrapper > params: ",stage, imageSource, style, animated)
  if (stage > 1) {
    imageSource = localImagePath + imageSource;
    if (animated) {
      console.log(
        'QuestionHelper > renderImageWrapper > params: ',
        stage,
        imageSource,
        style,
        animated,
      );
      console.log('stage >1; animated true');
      return (
        <Animated.Image
          style={[style]}
          source={{
            uri:
              Platform.OS === 'android' ? 'file://' + imageSource : imageSource,
          }}
        />
      );
    }
    console.log(
      'QuestionHelper > renderImageWrapper > params: ',
      stage,
      imageSource,
      style,
      animated,
    );
    console.log('stage >1; animated false');
    return (
      <Image
        source={{
          uri:
            Platform.OS === 'android' ? 'file://' + imageSource : imageSource,
        }}
        style={style}
      />
    );
  } else {
    if (animated) {
      console.log(
        'QuestionHelper > renderImageWrapper > params: ',
        stage,
        imageSource,
        style,
        animated,
      );
      console.log('stage < 1; animated true');
      return <Animated.Image style={[style]} source={imageSource} />;
    }
    console.log(
      'QuestionHelper > renderImageWrapper > params: ',
      stage,
      imageSource,
      style,
      animated,
    );
    console.log('stage  < 1; animated true');
    return <Image source={imageSource} style={style} />;
  }
};
const removeJSONFile = stageID => {
  let path = localStagePath + stageID + '.json';
  RNFetchBlob.fs.exists(path).then(existed => {
    if (existed) {
      RNFetchBlob.fs
        .unlink(path)
        .then(() => {
          console.log('removed');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('not exist');
    }
  });
};

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
      console.log('response data from s3: ', res.info().status);
      let status = res.info().status;
      console.log(status);
      console.log(res.data());
      // the temp file path
      console.log('The file will save to ', res.path());
      //   return the file path being saved.

      return res.path();
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
  console.log('getTestQuestions > progress', stage, level, test, progress);

  // readJsonFile()
  switch (stage) {
    case 0:
      console.log('stage ', stage, ' level ', level, ' test ', test);
      return STAGE_ONE[level][test];
    case 1:
      console.log('stage ', stage, ' level ', level, ' test ', test);
      return STAGE_TWO[level][test];
  }
  console.log('stage ', stage, ' level ', level, ' test ', test);
  // adjust to follow current files on s3.
  // todo: maybe change file name on s3 to this style: start from 0.

  return checkStageFileExisted(stage + 1).then(isExisted => {
    if (!isExisted) {
      return fetchQuestion(stage + 1).then(result => {
        console.log('getOnlineQuestions > fetchquestion result:', result);
        if (result) {
          return readJsonFile(localStagePath + (stage + 1) + '.json')
            .then(result => {
              console.log('fetch> read > result: ', result.levels[level][test]);
              // fetch images:
              const a = setStageImagesAssets(result.assetsRequired);
              console.log(
                'getOnlineQuestions > fetch > setImages > result: ',
                a,
              );
              return result.levels[level][test];
            })
            .catch(e => console.log(e));
          // console.log('fetch> read > result: ', stageData.levels[level[test]]);
          // return stageData.levels[level][test];
        } else {
          console.log(
            'fetch' + stage + ' > result: ',
            result,
            ', solution: retun stage_one',
          );
          return STAGE_ONE;
        }
      });
    } else {
      // const stageData = await readJsonFile(localStagePath + stage + '.json');
      // console.log(stageData.levels[level][test]);
      // return stageData.levels[level][test];

      return readJsonFile(localStagePath + (stage + 1) + '.json')
        .then(result => {
          console.log('read from local file: ', result);
          console.log(level, test, result.levels);
          // fetch images:
          const a = setStageImagesAssets(result.assetsRequired);
          console.log('getTestQuestions > local > setImages > result: ', a);
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
  // console.log(myFilePath, 'my file path');
  return RNFetchBlob.fs.exists(myFilePath).then(existed => {
    console.log(myFilePath, ' stage existed ? ', existed);
    return existed;
  });
};

export const metaData = {};
export const readJsonFile = async filePath => {
  console.log('readjsonfile > filepath: ', filePath);
  // filePath = filePath ? filePath : localStagePath + '1.json';
  // encoding:utf8 | base64 | ascii | uri
  return RNFetchBlob.fs
    .readFile(filePath, 'utf8')
    .then(data => {
      console.log('read file success: ', filePath);
      // console.log(data, typeof data);

      let myJsonObject = JSON.parse(data);
      try {
        metaData.data = myJsonObject.metaData;
        console.log(myJsonObject, 'data from json cliud');
        console.log(metaData, 'metadata from local');
      } catch (e) {
        console.log(e);
      }
      console.log('json read: ', myJsonObject);
      return myJsonObject;
    })
    .catch(e => {
      console.log('error: ', e);
    });
};
// removeJSONFile(3);
// removeJSONFile(2);
// removeJSONFile(4);
// readJsonFile(localStagePath + '3.json').then(() => {
//   removeJSONFile(3);
// });
