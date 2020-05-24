import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  reviewHeader: {
    flex: 2,
    justifyContent: 'flex-start',
    backgroundColor: '#efc458',
    padding: 25,
  },
  actionsWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  goHome: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  featuredWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredVocab: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  noSelectText: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    letterSpacing: 1.5,
    color: '#ffffff',
  },
  bigImg: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderRadius: 16,
    borderColor: '#dddddd',
    marginRight: 20,
  },
  vocabInfo: {
    justifyContent: 'space-between',
    height: 100,
  },
  listenBtn: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    color: '#ffffff',
  },
  vocabulariesWrapper: {
    flex: 7,
  },
  vocabularyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,

  },
  smallImg: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: '#dddddd',
    marginRight: 15,
  },
  labelWrapper: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#dddddd',
    borderRadius: 20,
  },
  chosenLabelWrapper: {
    borderColor: '#f7ab5f',
  },
  sectionHeader: {
    padding: 15,
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
    color: "#f7ab5f"
  },
  item: {
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    letterSpacing: 1,
    color: "#4c4c4c",

  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
  emptyMessage: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    color: "#4c4c4c",
    textAlign: 'center',
    letterSpacing: 1,
    width: '80%',
  },
});
