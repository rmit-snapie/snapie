import RNFetchBlob from 'rn-fetch-blob';
import RNFS, {
  MainBundlePath,
  CachesDirectoryPath,
  LibraryDirectoryPath,
  DocumentDirectoryPath,
} from 'react-native-fs';
// import React from 'react';
// import {Image} from 'react-native';

export const dirs = RNFetchBlob.fs.dirs;
console.log(dirs);
console.log(dirs.LibraryDir);
console.log(dirs.DocumentDir);
console.log(dirs.CacheDir);
console.log(dirs.DCIMDir);
console.log(dirs.DownloadDir);
// from RNFS
console.log('from RNFS:');
console.log(
  MainBundlePath,
  CachesDirectoryPath,
  LibraryDirectoryPath,
  DocumentDirectoryPath,
);
// // to create folder in  Library directory (invisible to user)
RNFetchBlob.fs.exists(dirs.DocumentDir + '/sad.png').then(result => {
  console.log('check file: ', dirs.DocumentDir + '/sad.png :exist? ', result);
  // if (result == false)
  //   RNFetchBlob.fs
  //     .mkdir(dirs.DocumentDir + '/myappdir')
  //     .then(success =>
  //       console.log(
  //         'created folder ' + dirs.DocumentDir + '/myappdir : success?',
  //         success,
  //       ),
  //     )
  //     .catch(e => console.log(e));
});
// var path = DocumentDirectoryPath + '/test.txt';

// // write the file
// RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
//   .then(success => {
//     console.log('FILE WRITTEN!', path);
//     RNFS.readFile(path, 'utf8').then(content => console.log(content));
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

//remove file
export const removeImage = () => {
  RNFS.exists(dirs.DocumentDir + '/sad.png').then(existed => {
    console.log('file sad.png existed?', existed);
    try {
      RNFS.unlink(dirs.DocumentDir + '/sad.png').then(anyinfo =>
        console.log('removed file sad.png', anyinfo),
      );
    } catch (e) {
      () => console.log(e);
    }
  });
};

// RNFetchBlob.fs.ls(dirs.LibraryDir).then((r) => console.log(r));

// create file : for testing: use absolute path
// RNFetchBlob.fs
//   .createFile(
//     '/Users/donbosco/rmit_working/sepm/testSaveFolder/MycreatedDire/myjson.json',
//     '{myobject:a}',
//     'utf8',
//   )
//   .then(
//     (value) => {
//       console.log('maked ', value);
//     },
//     (error) => {
//       console.log('rejected: ', error);
//     },
//   )
//   .catch((e) => console.log(e));
// todo: can change the path here to dirs.LibraryDir/myfolder....
// todo: filename could use from data downloaded.
// const imagePath = `/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder/myImage.png`;
// const imagePath = `replave here by your absolute path to the project to test...`;
export const getImage = async fetchPath => {
  fetchPath = fetchPath
    ? fetchPath
    : 'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/sad.png';
  console.log('fech path: ', fetchPath);
  let filepath = fetchPath.split('/');
  await RNFetchBlob.config({
    // add this option that makes response data to be stored as a file, not convert to base64
    // // this is much more performant.
    // fileCache: true,
    // // by adding this option, the temp files will have a file extension
    // appendExt: 'png',
    // response data will be saved to this path if it has access right.
    path: dirs.DocumentDir + '/' + filepath[filepath.length - 1],
    // use wifi only, this flag will only work on API version 21 or above
    wifiOnly: true,
  })
    .fetch(
      'GET',
      // 'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/sad.png',
      fetchPath,
      // {
      //   Authorization: 'Bearer access-token...',
      // },
    )
    .then(res => {
      console.log('get data from s3: ', res);
      let status = res.info().status;
      console.log(status);
      // the temp file path
      console.log('The file will save to ', res.path());
      // make dir to test
      // todo: change to your path, note the last /
      const myFolderPath =
        '/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder/';
      RNFetchBlob.fs.exists(myFolderPath).then(existed => {
        if (!existed) {
          RNFetchBlob.fs.mkdir(myFolderPath);
        }
      });
      // write file
      RNFS.writeFile(myFolderPath + filepath[filepath.length - 1], res.data)
        .then(() => {
          console.log(
            'file saved at ' + myFolderPath + filepath[filepath.length - 1],
          );
        })
        .catch((e, code) => console.log(e, code));
      //    create dir
      //   RNFetchBlob.fs
      //     .exists(dirs.DocumentDir +"/myDownload")
      //     .then(existed => {
      //       if (!existed) {
      //         RNFetchBlob.fs.mkdir(
      //             dirs.DocumentDir +"/myDownload",
      //         );
      //       }
      //     });
      //   const data = res.data;
      //   const fileName = filepath[filepath.length - 1];
      //   RNFS.writeFile(res.path(), data).then(info => {
      //     console.log('file saved at ' + res.path(), info);
      //   });
      //     // remove cached file from storage
      //     res.flush();
      //     // remove file by specifying a path
      // RNFetchBlob.fs.unlink('some-file-path').then(() => {
      //   // ...
      // })
      // Beware that when using a file path as Image source on Android,
      // you must prepend "file://"" before the file path
      // let imageView = (
      //   <Image
      //     source={{
      //       uri:
      //         Platform.OS === 'android'
      //           ? 'file://' + res.path()
      //           : '' + res.path(),
      //     }}
      //   />
      // );
      // make dir

      // if(status == 200) {
      //   // the conversion is done in native code
      //   let base64Str = res.base64()
      //   // the following conversions are done in js, it's SYNC
      //   let text = res.text()
      //   let json = res.json()
      // } else {
      //   // handle other status codes
      // }
      // RNFetchBlob.fs
      //   // todo: note: error if folder existed. use exist to check first
      //   //   .exists('/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder').then....
      //   .mkdir('/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder')
      //   .then(value => {
      //     console.log('maked ', value);
      //     const imageData = res.data;
      //     // convert base64 back to image
      //     RNFS.writeFile(imagePath, imageData, 'base64').then(() => {
      //       console.log('Image converted to jpg and saved at ' + imagePath);
      //     });
      //   });
    })
    .catch((e, code) => console.log(e, code));
};
