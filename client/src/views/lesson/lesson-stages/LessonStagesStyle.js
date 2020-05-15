import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 45,
  },
  contentContainer: {
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
    width: 350,
    borderRadius: 10,
    marginBottom: 15,
    paddingTop: 20,
  },
  stageLevels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  unlockedStage: {},
  lockedStage: {
    backgroundColor: '#dddddd',
  },
});
