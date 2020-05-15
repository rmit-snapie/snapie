import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    flex: 3,
    width: windowWidth,
  },
  profileActionsWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  profileInfoWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Amiko-Bold',
    fontWeight: '700',
    fontSize: 18,
  },
  avatar: {
    width: 100,
    height: 100,
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
    fontWeight: '300',
    letterSpacing: 2,
  },
  profileBody: {
    flex: 6,
  },
});
