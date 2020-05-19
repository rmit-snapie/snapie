import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAssetWrapper: {
    flex: 3,
    justifyContent: 'center',
    marginTop: 20,
    padding: 25,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  questionWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  question: {
    fontSize: 24,
    fontFamily: 'Amiko-Bold',
    textAlign: 'center',
  },
  recordButtonWrapper: {
    flex: 2,
  },
  record: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  checkWrapper: {
    flex: 1,
  },
  confirmButton: {
    borderBottomWidth: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 16,
    paddingLeft: 16,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
  },
  confirmAnswer: {
    borderBottomColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#f7ab5f',
  },
  disabledConfirm: {
    borderBottomColor: 'rgba(120,114,120,0.64)',
    backgroundColor: '#afafaf',
  },
  confirmTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
