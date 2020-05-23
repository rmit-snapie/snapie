import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  profileHeader: {
    flex: 3,
    width: windowWidth,
    backgroundColor: '#ffffff',

  },
  profileActionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  profileAction: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  profileInfoWrapper: {
    flex: 2,
    alignItems: 'center',
    bottom: 40
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    fontWeight: '600',
    color: '#4c4c4c',
    bottom: 30
  },
  avatar: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  tabsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#dddddd',
    width: windowWidth / 2,
    marginBottom: 10
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#f7ab5f',
    marginBottom: 10

  },
  tabTitle: {
    fontSize: 15,
    fontFamily: 'Quicksand-Medium',
    fontWeight: '600',
    letterSpacing: 1,
    color: '#4c4c4c',
  },
  profileBody: {
    flex: 6,
    width: '100%',
  },

  activeTabTitle: {
    fontSize: 15,
    fontFamily: 'Quicksand-Bold',
    fontWeight: '600',
    letterSpacing: 1,
    color: '#f7ab5f',
  }
});
