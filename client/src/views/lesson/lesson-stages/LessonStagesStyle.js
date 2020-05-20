import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    overflow: 'visible',
    paddingTop: 100,
  },
  text: {
    fontFamily: 'Amiko-Bold',
    fontSize: 24,
    marginBottom: 50,
  },
  stageWrapper: {
    borderColor: '#e5e5e5',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    borderRadius: 10,
    marginBottom: 80,
    paddingTop: 20,
    position: 'relative',
  },
  stageIcon: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    position: 'absolute',
    top: -50,
    zIndex: 1,
  },
  stageLevels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  unlockedStage: {},
  lockedStage: {
    backgroundColor: '#dddddd',
  },
});
