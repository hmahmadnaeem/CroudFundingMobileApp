import {StyleSheet} from 'react-native';

const TextSpaceBetweenStyle = StyleSheet.create({
  mainRowContainerDocumetos: {
    // backgroundColor: '#00ff00',
    marginTop: 8,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 4,
    borderBottomWidth: 1,
  },
  leftTextContainerDocumetos: {
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  rightTextContainerDocumetos: {
    alignItems: 'center',
    // backgroundColor: 'white',
  },
});

export default TextSpaceBetweenStyle;
