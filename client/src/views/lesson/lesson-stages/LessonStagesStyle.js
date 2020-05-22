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
    height: 120,
    width: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: -70,
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    marginBottom: 20,
    borderRadius: 25,
    borderColor: '#dddddd',
    borderWidth: 2,
    borderBottomWidth: 4,
    backgroundColor: '#ffffff',
//    shadowColor: "#000",
//    shadowOffset: {
//    	width: 2,
//    	height: 2,
//    },
//    shadowOpacity: 1.18,
//    shadowRadius: 1.00,
//
//    elevation: 2,
  },
  unlockedStage: {},
  lockedStage: {
    backgroundColor: '#dddddd',
  },
});
