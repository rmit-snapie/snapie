// import RNFetchBlob from 'rn-fetch-blob';
// import RNFS from 'react-native-fs';

// export const dirs = RNFetchBlob.fs.dirs;
// console.log(dirs.LibraryDir);
// console.log(dirs.DocumentDir);
// console.log(dirs.CacheDir);
// console.log(dirs.DCIMDir);
// console.log(dirs.DownloadDir);
// // to create folder in  Library directory (invisible to user)
// // RNFetchBlob.fs.exists(dirs.LibraryDir + '/myappdir').then((result) => {
// //   console.log('check folder: ', result);
// //   if (result == false)
// //     RNFetchBlob.fs
// //       .mkdir(dirs.LibraryDir + '/myappdir')
// //       .then((success) => console.log('created folder ', success))
// //       .catch((e) => console.log(e));
// // });

// // RNFetchBlob.fs.ls(dirs.LibraryDir).then((r) => console.log(r));

// // create file : for testing: use absolute path
// // RNFetchBlob.fs
// //   .createFile(
// //     '/Users/donbosco/rmit_working/sepm/testSaveFolder/MycreatedDire/myjson.json',
// //     '{myobject:a}',
// //     'utf8',
// //   )
// //   .then(
// //     (value) => {
// //       console.log('maked ', value);
// //     },
// //     (error) => {
// //       console.log('rejected: ', error);
// //     },
// //   )
// //   .catch((e) => console.log(e));

// export const getImage = async fetchPath => {
//   fetchPath = fetchPath
//     ? fetchPath
//     : 'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/sad.png';
//   RNFetchBlob;
//   let filepath = fetchPath.split('/');
//   await RNFetchBlob.config({
//     // add this option that makes response data to be stored as a file, not convert to base64
//     // // this is much more performant.
//     // fileCache: true,
//     // // by adding this option, the temp files will have a file extension
//     // appendExt: 'png',
//     // response data will be saved to this path if it has access right.
//     path: dirs.DocumentDir + '/' + filepath[filepath.length - 1],
//     // use wifi only, this flag will only work on API version 21 or above
//     wifiOnly: true,
//   })
//     .fetch(
//       'GET',
//       // 'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/sad.png',
//       fetchPath,
//     )
//     .then(res => {
//       console.log('get data from s3: ', res.data);
//       let status = res.info().status;
//       console.log(status);
//       // make dir
//       // // todo: change dir here to DocumentDir....
//       // RNFetchBlob.fs
//       //   .exists('/Users/donbosco/rmit_working/sepm/testSaveFolder/MycreatedDir')
//       //   .then(existed => {
//       //     if (!existed) {
//       //       RNFetchBlob.fs.mkdir(
//       //         '/Users/donbosco/rmit_working/sepm/testSaveFolder/MycreatedDir',
//       //       );
//       //     }
//       //   });
//       const data = res.data;
//       const fileName = filepath[filepath.length - 1];

//       // // todo: can change the path here to dirs.LibraryDir/myfolder....
//       // // todo: filename could use from data downloaded.
//       // todo: change dir to DocumentDir...
//       // const imagePath = `/Users/donbosco/rmit_working/sepm/testSaveFolder/MycreatedDir/myfile.js`;
//       // // convert base64 back to image
//       RNFS.writeFile(imagePath, imageData).then(() => {
//         console.log('Image converted to jpg and saved at ' + imagePath);
//       });
//     })
//     .catch(e => console.log(e));
// };
