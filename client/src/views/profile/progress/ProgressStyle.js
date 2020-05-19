import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  row: {
    flex: 2,
    flexDirection: 'row',
  },
  image: {
    width: 175,
    height: 175,
    resizeMode: 'contain',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteText: {
    position: 'absolute',
    fontWeight: '600',
    fontFamily: 'Quicksand-Light',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 1,
  },
  testsWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  levelsWrapper: {
    justifyContent: 'flex-end',
  },
  wordsWrapper: {
    justifyContent: 'flex-start',
  },
  badgesWrapper: {
    justifyContent: 'flex-end',
  },
  smallerCircle: {
    width: 130,
    height: 130,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  testCircle: {
    backgroundColor: '#f47171',
  },
  levelsCircle: {
    backgroundColor: '#acd88f',
  },
  wordsCircle: {
    backgroundColor: '#84d0f7',
  },
  badgesCircle: {
    backgroundColor: '#f7ab5f',
  },
});
