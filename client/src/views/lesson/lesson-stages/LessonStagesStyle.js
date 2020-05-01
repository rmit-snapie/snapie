import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 45,
    paddingBottom: 45
  },
  contentcontainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Amiko-Bold',
    fontSize: 24,
    marginBottom: 50,
  },
  stageWrapper: {
    borderWidth: 2,
    borderColor: '#e5e5e5',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 10,
    marginBottom: 12,
  },
  stageLevels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 200,
  },
  unlockedStage: {},
  lockedStage: {
    backgroundColor: '#AFAFAF',
  },
});
