import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 45,
    paddingTop: 45,
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
    height: 150,
    borderRadius: 10,
    marginBottom: 12,
  },
  stageLevels: {
    flexDirection: 'row',
    justifyContent: 'center',
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
