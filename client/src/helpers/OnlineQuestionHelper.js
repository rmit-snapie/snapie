// import RNFetchBlob from 'rn-fetch-blob';
// import RNFS, {DocumentDirectoryPath} from 'react-native-fs';
// import {STAGE_ONE} from '../domain-models/stage-1/StageOneQuestions';
// import {dirs} from './QuestionHelper';
//
// const imageFetchPath =
//   'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/images/';
// const localImagePath = dirs.DocumentDir + '/images/';
//
// const stageFetchPath =
//   'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/stages/';
// const localStagePath = dirs.DocumentDir + '/stages/';
//
// const checkStageFileExisted = async (stageID) => {
//   /**
//    * check if the stage json file existed in local memory
//    * @param:  stageID (int)
//    */
//   let myFilePath = localStagePath + stageID + '.json';
//   // console.log(myFilePath, 'my file path');
//   return RNFetchBlob.fs.exists(myFilePath).then((existed) => {
//     console.log(myFilePath, ' stage existed ? ', existed);
//     return existed;
//   });
// };
//
// const fetchQuestion = async (stageID) => {
//   /**
//    * fetch json file from API then save to doctument dir as JSON file
//    * @param: stageID (int)
//    * @return: json file, saved in documentDir/stages/stageID.json
//    * default: 1.json
//    */
//
//   // set default stage file name if stageID not exist
//   const stageFileName = stageID ? stageID + '.json' : '1.json';
//   let fetchPath = stageFetchPath + stageFileName;
//   // check path:
//   return RNFetchBlob.config({
//     path: localStagePath + stageFileName,
//     wifiOnly: true,
//   })
//     .fetch('GET', fetchPath)
//     .then((res) => {
//       console.log('response data from s3: ', res.info().status);
//       // let status = res.info().status;
//       // console.log(status);
//       // the temp file path
//       console.log('The file will save to ', res.path());
//       //   return the file path being saved.
//
//       return res.path();
//     })
//     .catch((e, code) => {
//       console.log(e, code);
//     });
// };
//
// export const readJsonFile = async (filePath) => {
//   console.log('readjsonfile > filepath: ', filePath);
//   // filePath = filePath ? filePath : localStagePath + '1.json';
//   // encoding:utf8 | base64 | ascii | uri
//   return RNFetchBlob.fs
//     .readFile(filePath, 'utf8')
//     .then((data) => {
//       console.log('read file success: ', filePath);
//       // console.log(data, typeof data);
//
//       let myJsonObject = JSON.parse(data);
//       console.log('json read: ', myJsonObject);
//       return myJsonObject;
//     })
//     .catch((e) => {
//       console.log('error: ', e);
//     });
// };
//
// export const getOnlineQuestions = async (progress) => {
//   /**
//    * get stage question data, for stage 1 and 2: return default; from stage 3: fetch if required
//    * @param: stageID (int)
//    * @return: json object (full stage data)
//    * default: stage_one.json
//    */
//   const {stage, level, test} = progress;
//   console.log(progress);
//   if (stage < 2) {
//     console.error('stage must be bigger than 2');
//     return [];
//   }
//   console.log('getOnlineQuestions > progress', stage, level, test);
//   // removeJSONFile(3);
//   return checkStageFileExisted(stage).then((isExisted) => {
//     // isExisted = false;
//     if (!isExisted) {
//       return fetchQuestion(stage).then((result) => {
//         console.log('getOnlineQuestions > fetchquestion result:', result);
//         if (result) {
//           //todo: parse JSON,return first test array
//           return readJsonFile(localStagePath + stage + '.json')
//             .then((result) => {
//               console.log('fetch> read > result: ', result.levels[level[test]]);
//               console.log(level, test, result.levels);
//               return result.levels[level][test];
//             })
//             .catch((e) => console.log(e));
//           // console.log('fetch> read > result: ', stageData.levels[level[test]]);
//           // return stageData.levels[level][test];
//         } else {
//           console.log(
//             'fetch' + stage + ' > ',
//             result,
//             ' solution: retun stage_one',
//           );
//           return STAGE_ONE;
//         }
//       });
//     } else {
//       // const stageData = await readJsonFile(localStagePath + stage + '.json');
//       // console.log(stageData.levels[level][test]);
//       // return stageData.levels[level][test];
//       return readJsonFile(localStagePath + stage + '.json')
//         .then((result) => {
//           console.log('read from local file: ', result);
//           console.log(level, test, result.levels);
//           return result.levels[level][test];
//         })
//         .catch((e) => console.log(e));
//     }
//   });
// };
//
// export const getQuestions = async (progress) => {
//   /**
//    * get stage question data, for stage 1 and 2: return default; from stage 3: fetch if required
//    * @param: stageID (int)
//    * @return: json object (full stage data)
//    * default: stage_one.json
//    */
//   const {stage, level, test} = progress;
//   console.log(progress);
//   if (stage < 2) {
//     console.error('stage must be bigger than 2');
//     return [];
//   }
//   console.log('getOnlineQuestions > progress', stage, level, test);
//   // removeJSONFile(3);
//   return checkStageFileExisted(stage).then((isExisted) => {
//     // isExisted = false;
//     if (!isExisted) {
//       return fetchQuestion(stage).then((result) => {
//         console.log('getOnlineQuestions > fetchquestion result:', result);
//         if (result) {
//           //todo: parse JSON,return first test array
//           return readJsonFile(localStagePath + stage + '.json')
//             .then((result) => {
//               console.log('fetch> read > result: ', result.levels[level[test]]);
//               console.log(level, test, result.levels);
//               return result.levels[level][test];
//             })
//             .catch((e) => console.log(e));
//           // console.log('fetch> read > result: ', stageData.levels[level[test]]);
//           // return stageData.levels[level][test];
//         } else {
//           console.log(
//             'fetch' + stage + ' > ',
//             result,
//             ' solution: retun stage_one',
//           );
//           return STAGE_ONE;
//         }
//       });
//     } else {
//       // const stageData = await readJsonFile(localStagePath + stage + '.json');
//       // console.log(stageData.levels[level][test]);
//       // return stageData.levels[level][test];
//       return readJsonFile(localStagePath + stage + '.json')
//         .then((result) => {
//           console.log('read from local file: ', result);
//           console.log(level, test, result.levels);
//           return result.levels[level][test];
//         })
//         .catch((e) => console.log(e));
//     }
//   });
// };
