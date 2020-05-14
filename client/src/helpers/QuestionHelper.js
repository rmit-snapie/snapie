import React from 'react';
import {Image, Animated} from 'react-native';
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
    return STAGE_TWO[level][test].length;
  }
};

export const getNumberOfTests = (stage: number, level: number) => {
  if (stage === 0) {
    return STAGE_ONE[level].length - 1;
  } else if (stage === 1) {
    return STAGE_TWO[level].length - 1;
  }
};

export const getNumberOfLevels = (stage: number) => {
  if (stage === 0) {
    return STAGE_ONE.length - 1;
  } else if (stage === 1) {
    return STAGE_TWO.length - 1;
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
  MainBundlePath,
  CachesDirectoryPath,
  LibraryDirectoryPath,
  DocumentDirectoryPath,
} from 'react-native-fs';
import styles from '../components/pair-selection/PairSelectionStyle';

export const dirs = RNFetchBlob.fs.dirs;
// console.log(dirs);
// console.log(dirs.LibraryDir);
console.log(dirs.DocumentDir);
// console.log(dirs.CacheDir);
// console.log(dirs.DCIMDir);
// console.log(dirs.DownloadDir);
// // from RNFS
// console.log('from RNFS:');
// console.log('react-native-fs MainBundlePath', MainBundlePath);
// console.log('react-native-fs CachesDirectoryPath', CachesDirectoryPath);
// console.log('react-native-fs LibraryDirectoryPath', LibraryDirectoryPath);
console.log('react-native-fs DocumentDirectoryPath', DocumentDirectoryPath);

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

const removeJSONFile = () => {
  let path = localStagePath + '1.json';
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
  console.log(stageFileName, 'print this please');

  let fetchPath = stageFetchPath + stageFileName;
  // check path:
  console.log('fech path: ', fetchPath);
  await RNFetchBlob.config({
    //   path that the response data will goto
    path: localStagePath + stageFileName,
    // use wifi only, this flag will only work on API version 21 or above
    wifiOnly: true,
  })
    .fetch(
      'GET',
      fetchPath,
      // {
      //   Authorization: 'Bearer access-token...',
      // },
    )
    .then(res => {
      console.log('response data from s3: ', res);
      let status = res.info().status;
      console.log(status);
      // the temp file path
      console.log('The file will save to ', res.path());
      //   return the file path being saved.
      return res.path();

      // // make dir to test
      // // todo: comment out the return above, change to your path below, note the last /
      // const myFolderPath =
      //   '/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder/';
      // RNFetchBlob.fs.exists(myFolderPath).then(existed => {
      //   if (!existed) {
      //     RNFetchBlob.fs.mkdir(myFolderPath);
      //   }
      // });
      // // write file to the test dir
      // RNFS.writeFile(myFolderPath + filepath[filepath.length - 1], res.data)
      //   .then(() => {
      //     console.log(
      //       'file saved at ' + myFolderPath + filepath[filepath.length - 1],
      //     );
      //   })
      //   .catch((e, code) => console.log(e, code));
    })
    .catch((e, code) => {
      console.log(e, code);

    });
};


export const saveJsonFile = (fileName, jsonData) => {
  fileName = fileName ? fileName : '1.json';
  let path = localStagePath + fileName;
  const stage1 = require('../domain-models/1.json');
  console.log(typeof stage1);
  const data = jsonData ? JSON.stringify(jsonData) : JSON.stringify(stage1);
  // data = data ? data : stage1;
  // write the file
  RNFS.writeFile(path, data, 'utf8')
    .then(success => {
      console.log('FILE WRITTEN!');
      // read back to check
      readJsonFile(path);
    })
    .catch(err => {
      console.log(err.message);
    });
};

const checkStageFileExisted = stageID => {
  /**
   * check if the stage json file existed in local memory
   * @param:  stageID (int)
   */
  let myFilePath = localStagePath + stageID + '.json';
  RNFetchBlob.fs.exists(myFilePath).then(existed => {
    console.log(existed, 'stage existed, path: ', myFilePath);
    return existed;
  });
};

// export const getOnlineQuestions = async (progress) => {
//   /**
//    * get stage question data, for stage 1 and 2: return default; from stage 3: fetch if required
//    * @param: stageID (int)
//    * @return: json object (full stage data)
//    * default: stage_one.json
//    */
//   // todo: how to save (dispatch) to redux so that it can be seen for all program
//   // todo: dispatch whole stage? or whole level? or whole test ?
//   // return local data for the first two stage:
//   const {stage, level, test} = progress;
//   console.log(progress);
//   if (stage < 2) {
//     console.error('stage must be bigger than 2');
//     return [];
//   }
//   console.log(stage, level, test, 'progress');
//   // return removeJSONFile();
//   //   stage more than 2: fetch if required
//   checkStageFileExisted(stage).then(isExisted => {
//     // if not existed: fetch the file
//     if (!isExisted) {
//       // fetch stage
//       fetchQuestion(stage).then(result => {
//         if (result) {
//           //todo: parse JSON,return first test array
//           const stageData = readJsonFile(localStagePath + stage + '.json');
//           console.log(stageData.levels[level][test], 'stage cloud');
//           // return stageData.levels[level][test];
//           // success: read file, convert to json object
//           // todo: finish this....
//           // RNFetchBlob.fs.readFile();
//           // get required asset:
//           // todo: finish this...
//           // const stageAssets = ['blue.png'];
//           // setStageAssets(stageAssets).then(success => {
//           //   console.log('get asset result: ', success);
//           // });
//           //  return object
//           // for now: return dummy
//           return STAGE_ONE;
//         } else {
//           // fail to fetch data: return default
//           return STAGE_ONE;
//         }
//       });
//     } else {
//       //  existed: read and return json object:
//       // todo: finish this
//       // dummy data:
//       return STAGE_ONE;
//     }
//   });
// };

// export const fetchImage = async imageName => {
//   /**
//    * fetch image file from API then save to doctument dir with same name
//    * @param: imageName
//    * @note:fetch path (API) is set as const
//    * default: default.png
//    */
//   // set default image file name if imageName not exist
//   const imageFileName = imageName ? imageName : 'default.png';
//
//   // set default stage 1 if stageID not exist
//   const fetchPath = imageFetchPath + imageFileName;
//   // check path:
//   console.log('fech path: ', fetchPath);
//   await RNFetchBlob.config({
//     // will save to docDir/images/...
//     path: localImagePath + imageFileName,
//     // use wifi only, this flag will only work on API version 21 or above
//     wifiOnly: true,
//   })
//     .fetch('GET', fetchPath)
//     .then(res => {
//       console.log('get imgage from s3: ', res);
//       let status = res.info().status;
//       console.log(status);
//       // the temp file path
//       console.log('The file will save to ', res.path());
//       //   return the file path being saved.
//       return res.path();
//       // make dir to test
//       // todo: change to your path, note the last /
//       const myFolderPath =
//         '/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder/';
//       RNFetchBlob.fs.exists(myFolderPath).then(existed => {
//         if (!existed) {
//           RNFetchBlob.fs.mkdir(myFolderPath);
//         }
//       });
//       // write file
//       RNFS.writeFile(myFolderPath + filepath[filepath.length - 1], res.data)
//         .then(() => {
//           console.log(
//             'file saved at ' + myFolderPath + filepath[filepath.length - 1],
//           );
//         })
//         .catch((e, code) => console.log(e, code));
//     })
//     .catch((e, code) => console.log(e, code));
// };
//
// export const setOfflineImageAssets = () => {};
//
// export const setStageAssets = async assetList => {
//   /**
//    * get all images asset ready
//    * fetch image file list from API then save to local asset images files with same name
//    * @param: assetList : imageName array
//    * default: default.png
//    */
//   let success = false;
//
//   // fetch every images....
//   assetList.forEach((image, index) => {
//     // check in local memory:
//     checkImageExisted(image).then(existed => {
//       if (existed) {
//         // existed: do nothing
//         return true;
//       }
//       // not existed: fetch to local memory
//       fetchImage(image).then(result => {
//         console.log('image fetched, result: ', result);
//         return result ? true : false;
//       });
//     });
//   });
//   return success;
// };
// const checkImageExisted = imageName => {
//   /**
//    * check if the image existed in local memory
//    * @param:  imageName
//    */
//   let imagePath = localImagePath + imageName;
//   RNFetchBlob.fs.exists(imagePath).then(existed => {
//     console.log(existed, 'image existed, path: ', imagePath);
//     return existed;
//   });
// };




// // testing:
// export const testJsonFile = () => {
//   // removeJSONFile();
//   saveJsonFile();
// };


export const renderImageWrapper = (stage, imageSource, style, animated) => {
  if (stage > 1) {
    if (animated) {
      return <Animated.Image style={[style]} source={{uri: imageSource}} />;
    }
    return <Image source={{uri: imageSource}} style={style} />;
  } else {
    if (animated) {
      return <Animated.Image style={[style]} source={imageSource} />;
    }
    return <Image source={imageSource} style={style} />;
  }
};
