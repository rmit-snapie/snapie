import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';

export const dirs = RNFetchBlob.fs.dirs;
console.log(dirs.LibraryDir);
console.log(dirs.DocumentDir);
console.log(dirs.CacheDir);
console.log(dirs.DCIMDir);
console.log(dirs.DownloadDir);
// to create folder in  Library directory (invisible to user)
// RNFetchBlob.fs.exists(dirs.LibraryDir + '/myappdir').then((result) => {
//   console.log('check folder: ', result);
//   if (result == false)
//     RNFetchBlob.fs
//       .mkdir(dirs.LibraryDir + '/myappdir')
//       .then((success) => console.log('created folder ', success))
//       .catch((e) => console.log(e));
// });

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
const imagePath = `/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder/myImage.png`;
// const imagePath = `replave here by your absolute path to the project to test...`;
export const getImage = fetchPath => {
  fetchPath = fetchPath
    ? fetchPath
    : 'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/sad.png';
  RNFetchBlob.fetch(
    'GET',
    // 'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/sad.png',
    fetchPath,
  ).then(res => {
    console.log('get data from s3: ', res);
    // make dir
    RNFetchBlob.fs
      // todo: note: error if folder existed. use exist to check first
      //   .exists('/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder').then....
      .mkdir('/Users/donbosco/rmit_working/sepm/snapie/client/MyFolder')
      .then(value => {
        console.log('maked ', value);
        const imageData = res.data;
        // convert base64 back to image
        RNFS.writeFile(imagePath, imageData, 'base64').then(() => {
          console.log('Image converted to jpg and saved at ' + imagePath);
        });
      })
      .catch(e => console.log(e));
  });
};
