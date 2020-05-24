import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    backgroundColor: '#ffffff',
  },
  notFound: {
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
    fontWeight: '600',
    textAlign: 'center',
  },
  resultsWrapper: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  resultWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
    paddingBottom: 30,


  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderRadius: 16,
    borderColor: '#dddddd',
  },
  actionButtonsWrapper: {
    height: 100,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  actionButton: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  description: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    fontWeight: '600',
    textAlign: 'center',
    color: '#f47171',
  },
  viewMore: {
    width: 45,
    height: 45,
    marginTop: 25,
  },
  viewLessWrapper: {
    flex: 1,
  },
  viewLess: {
    width: 45,
    height: 45,
  },
});
