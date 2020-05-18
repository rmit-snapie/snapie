import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    flex: 2,
    width: windowWidth,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
  },
  avatar: {
    width: 80,
    height: 80,
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
    borderBottomWidth: 2,
    borderBottomColor: '#afafafaf',
    width: windowWidth / 2,
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: '#f7ab5f',
  },
  tabTitle: {
    fontSize: 16,
    fontFamily: 'Quicksand-Light',
    fontWeight: '500',
    letterSpacing: 2,
  },
  profileBody: {
    flex: 6,
    width: '100%',
  },
});
