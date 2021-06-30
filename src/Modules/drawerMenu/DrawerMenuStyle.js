import {StyleSheet} from 'react-native';

const DrawerMenuStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,230,0,0.7)',
    // marginLeft: 17,
  },
  //   whiteBlackContainer: {
  //     flexDirection: 'row',
  //     borderWidth: 5,
  //     borderColor: 'blue',
  //     flex: 1,
  //   },
  whiteBg: {
    width: '75%',
    backgroundColor: 'rgba(255,255,0,1)',
    marginLeft: 17,
  },
  //   blurOverLay: {
  //     width: '25%',
  //     backgroundColor: 'rgba(0,0,0,1)',
  //     // height: '100%',
  //   },
  userImageContainer: {
    backgroundColor: 'rgba(34, 123, 255, 1)',
    borderRadius: 50,
    marginTop: 73,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  juanText: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 32,
  },
  verificacioText: {
    fontSize: 14,
    marginTop: 6,
  },
  headerBorderContainer: {
    marginTop: 15,
    marginBottom: 7,
  },
});
export default DrawerMenuStyle;
