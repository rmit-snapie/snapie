import {Platform} from 'react-native';
const checkAndroid = {
  isAndroid: () => {
    return Platform.OS === 'android';
  },
};
export default checkAndroid;
