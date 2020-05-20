import React from 'react';
import {Animated, Image, Platform} from 'react-native';
import {STAGE_ONE} from '../domain-models/stage-1/StageOneQuestions';
import {STAGE_TWO} from '../domain-models/stage-2/StageTwoQuestions';
import RNFetchBlob from 'rn-fetch-blob';

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
    } else if (level === 4) {
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

export const dirs = RNFetchBlob.fs.dirs;

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
  return RNFetchBlob.config({
    // will save to docDir/images/...
    path: localImagePath + imageFileName,
    // use wifi only, this flag will only work on API version 21 or above
    wifiOnly: true,
  })
    .fetch('GET', fetchPath)
    .then(res => {
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
    return existed;
  });
};

export const setStageImagesAssets = async assetList => {
  /**
   * get all images asset ready
   * fetch image file list from API then save to local asset images files with same name
   * @param: assetList : imageName array
   * default: default.png
   */

  // fetch every images....
  return await Promise.all(
    assetList.map(image => {
      // check in local memory:
      return checkImageExisted(image).then(existed => {
        if (existed) {
          return true;
        } else {
          return fetchImage(image).then(result => {
            return result;
          });
        }
      });
    }),
  );

  // assetList.forEach(image => {
  //   // check in local memory:
  //   checkImageExisted(image).then(existed => {
  //     if (existed) {
  //       return true;
  //     } else {
  //       fetchImage(image).then(result => {
  //         return result;
  //       });
  //     }
  //   });
  // });
};

export const renderImageWrapper = (stage, imageSource, style, animated) => {
  if (
    stage > 1
    // ||
    // (typeof imageSource == typeof String && imageSource.includes('.png'))
  ) {
    imageSource = localImagePath + imageSource;
    // let theimageSource = localImagePath + imageSource;
    // console.log(theimageSource);
    // checkImageExisted(imageSource).then(existed => {
    //   if (existed) {
    //     console.log('image existed: ', theimageSource);
    //     if (animated) {
    //       return (
    //         <Animated.Image
    //           style={[style]}
    //           source={{
    //             uri:
    //               Platform.OS === 'android'
    //                 ? 'file://' + theimageSource
    //                 : theimageSource,
    //           }}
    //         />
    //       );
    //     }
    //     return (
    //       <Image
    //         source={{
    //           uri:
    //             Platform.OS === 'android'
    //               ? 'file://' + theimageSource
    //               : theimageSource,
    //         }}
    //         style={style}
    //       />
    //     );
    //   } else {
    //     return fetchImage(imageSource).then(result => {
    //       console.log('image not exist, download ... result: ', result);
    //       if (animated) {
    //         return (
    //           <Animated.Image
    //             style={[style]}
    //             source={{
    //               uri: Platform.OS === 'android' ? 'file://' + result : result,
    //             }}
    //           />
    //         );
    //       }
    //       return (
    //         <Image
    //           source={{
    //             uri: Platform.OS === 'android' ? 'file://' + result : result,
    //           }}
    //           style={style}
    //         />
    //       );
    //     });
    //   }
    // });
    if (animated) {
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
    // console.log(
    //   'QuestionHelper > renderImageWraper > imageSource: ',
    //   imageSource,
    // );
    if (animated) {
      return <Animated.Image style={[style]} source={imageSource} />;
    }

    return <Image source={imageSource} style={style} />;
  }
};

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
  let stageData = [];
  // online questions:
  return checkStageFileExisted(stage + 1).then(isExisted => {
    if (!isExisted) {
      return fetchQuestion(stage + 1).then(result => {
        if (result) {
          return readJsonFile(localStagePath + (stage + 1) + '.json')
            .then(async data => {
              console.log('read file result: ', data);
              stageData = data.levels[level][test];
              // fetch images:
              return await setStageImagesAssets(data.assetsRequired);
              // return data.levels[level][test];
            })
            .then(resutl => {
              console.log('after set images ', resutl);
              console.log(stageData);
              return stageData;
            })
            .catch(e => console.log(e));
        } else {
          return STAGE_ONE;
        }
      });
    } else {
      return readJsonFile(localStagePath + (stage + 1) + '.json')
        .then(result => {
          setStageImagesAssets(result.assetsRequired);
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
