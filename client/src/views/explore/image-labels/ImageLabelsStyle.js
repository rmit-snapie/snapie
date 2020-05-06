import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  previewImage: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  backButtonWrapper: {
    flex: 1,
    top: 20,
    left: 20,
    alignItems: 'flex-start',
  },
  resultsWrapper: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    borderRadius: 16,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Amiko-Bold',
    color: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    fontSize: 16,
  },
  actionButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    fontFamily: 'Amiko-Bold',
    fontSize: 20,
  },
  noResultText: {
    fontFamily: 'Amiko-Bold',
    fontSize: 32,
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  lookUpButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
