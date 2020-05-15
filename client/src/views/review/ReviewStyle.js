import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 35,
    fontFamily: 'Amiko-Bold',
    marginLeft: 25
  },
  goHome: {
    margin: 10,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  listenBtn: {
    width: 60,
    height: 60,
  },
  noSelect: {
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efc458',
  },
  noSelectText: {
    fontSize: 24,
    fontFamily: 'Amiko-Bold',
  },
  buttonWrapper1: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efc458',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  bigImg: {
    margin: 10,
    marginLeft: 25,
    width: 150,
    height: 150,
    borderWidth: 3,
    borderRadius: 16,
    borderColor: '#afafaf',
  },
  smallImg: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 16,
    borderColor: '#afafaf',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
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
    backgroundColor: "#efc458",
    borderRadius: 16,
    padding: 4,

  },
});