import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  profileWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileText: {
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    color: '#4c4c4c',
    paddingBottom: 5,
    color: '#FFFFFF',

  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  buttonsWrapper: {
    flex: 5.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
