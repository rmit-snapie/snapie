import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },
  notFound: {
    fontSize: 32,
    fontFamily: 'Amiko-Bold',
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
    marginRight: 10,
    marginBottom: 10,
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
    borderColor: '#afafaf',
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
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'Amiko-Bold',
    textAlign: 'center',
    color: '#f47171',
  },
  viewMore: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  viewLessWrapper: {
    flex: 1,
  },
  viewLess: {
    width: 40,
    height: 40,
  },
});
