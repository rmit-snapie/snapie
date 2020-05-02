import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  profileWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileText: {
    fontFamily: 'Amiko-Bold',
    fontSize: 26,
    paddingBottom: 5,
    color: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
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