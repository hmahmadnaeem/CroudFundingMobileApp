import {StyleSheet} from 'react-native';

const DeudaSeniorStyle = StyleSheet.create({
  mainContainer: {
    marginTop: 15,
  },
  rowMainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-between',
    // backgroundColor: 'white',
  },
  pointerContainer: {
    width: '5%',
    // backgroundColor: 'red',
  },
  pointer: {
    width: 16,
    height: 16,
    backgroundColor: '#000',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  pointerDescriptionContainer: {
    width: '45%',
    // backgroundColor: 'blue',
    marginLeft: 10,
  },
  textAdjacentIcon: {
    fontSize: 14,
    fontWeight: '300',
  },
  middleEmptyContainer: {
    width: '5%',
    // backgroundColor: 'pink',
  },
  pointerValueContainer: {
    width: '30%',
    // backgroundColor: 'brown',
  },
  textAdjacentPercentage: {
    fontSize: 14,
    fontWeight: '300',
  },
  //   beforeLastValueContainer: {
  //     width: '5%',
  //     backgroundColor: 'pink',
  //   },
  pointerPercentageContainer: {
    width: '10%',
    // backgroundColor: 'orange',
  },
  percentageValueText: {
    fontSize: 14,
    fontWeight: '300',
  },
  afterLastValueContainer: {
    width: '5%',
    // backgroundColor: 'pink',
  },
});
export default DeudaSeniorStyle;
