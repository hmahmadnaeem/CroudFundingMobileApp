import {StyleSheet} from 'react-native';

const AlfaStyle = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  bgImgContainer: {
    width: '100%',
    height: 300,
  },
  textMarginOnImg: {
    marginHorizontal: 21,
  },
  bgImageTextContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  desarrolloText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  textCvtRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  rightSideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  proText: {
    fontSize: 16,
  },
  quedanText: {
    fontSize: 12,
    marginLeft: 3,
  },
  marginAdjust: {
    marginHorizontal: 21,
  },
  grayClrStrip: {
    backgroundColor: '#DADADA',
    borderRadius: 25,

    marginTop: 30,
  },
  blueClrStrip: {
    backgroundColor: '#0C1327',
    width: '30%',
    borderRadius: 15,
  },
  percentageText: {
    // fontSize: 8,
    color: 'white',
    textAlign: 'center',
  },
  priceTextCvtRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderContainer: {
    marginVertical: 19,
    backgroundColor: 'red',
  },
  loremText: {
    fontSize: 10,
    fontWeight: '300',
    lineHeight: 15,
    textAlign: 'justify',
  },
  grayTableContainer: {
    backgroundColor: '#dcdcdc',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 5,
  },
  leftStideTableContainer: {
    // backgroundColor: 'aqua',
    flexDirection: 'row',

    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
    marginBottom: 10,
    // marginVertical: 20,
    marginLeft: 10,
  },

  leftInternalOfLeft: {},
  rightInternalOfLeft: {},
  rightStideTableContainer: {
    // backgroundColor: 'purple',
    flexDirection: 'row',

    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '50%',
    marginRight: 10,
  },
  leftInternalOfRight: {},
  RightInternalOfRight: {},
  tableTextNormal: {
    fontSize: 10,
    fontWeight: 'normal',
    textAlign: 'right',
    marginBottom: 10,
  },
  tableTextBold: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navbarList: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-between',
  },
  navbarListText: {
    fontSize: 14,
  },
});

export default AlfaStyle;
