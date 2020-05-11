import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      text: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 35
      },
      buttonWrapper1: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
      tinyLogo: {
        width: 200,
        height: 200,
      },
      lookUp: {
        width: 40,
        height: 40,
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
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        backgroundColor: 'rgba(0,0,0, 0.4)',
        borderRadius: 16,
        padding: 10,
      },
});