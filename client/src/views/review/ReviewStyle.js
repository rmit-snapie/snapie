import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  reviewHeader: {
    flex: 2,
    justifyContent: 'flex-start',
    backgroundColor: '#84d0f7',
    padding: 25,
  },
  actionsWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  goHome: {
    width: 30,
    height: 30,
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
    borderColor: '#afafaf',
    marginRight: 10,
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
    fontWeight: 'bold',
    fontFamily: 'Quicksand-Bold',
    color: '#ffffff',
  },
  vocabulariesWrapper: {
    flex: 7,
  },
  vocabularyWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  smallImg: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderRadius: 16,
    borderColor: '#afafaf',
  },
  sectionHeader: {
    padding: 15,
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
  item: {
    paddingLeft: 50,
    fontSize: 18,
    fontFamily: 'Amiko-Bold',
  },
  labelWrapper: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    backgroundColor: '#efc458',
    borderRadius: 16,
    padding: 4,
  },
});
