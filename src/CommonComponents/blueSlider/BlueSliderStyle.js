import {StyleSheet} from 'react-native';

const BlueSliderStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#00ff00',
    // marginTop: 100,
  },
  sliderTopMiddleText: {
    fontSize: 14,
    textAlign: 'center',

    // backgroundColor: 'white',
  },
  mianGrayContainer: {
    backgroundColor: '#DADADA',
    alignSelf: 'center',
    width: '100%',
    borderRadius: 25,

    marginTop: 15,
  },
  blueColorContainer: {
    backgroundColor: '#0C1327',
    width: '30%',
    height: 10,
    borderRadius: 15,
  },
  createCircleOnSlider: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 25,
    borderColor: '#000',
    borderWidth: 1,
    position: 'absolute',
    right: 0,
    bottom: -8,
    // marginBottom: 10,
  },
  sliderLowerTextContainer: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginTop: 12,
  },
});

export default BlueSliderStyle;
