import {StyleSheet} from 'react-native';

const InputFieldStyle = StyleSheet.create({
  textContainer: {
    marginHorizontal: 32,
    marginBottom: 3,
    flexDirection: 'row',
  },
  inputDescription: {
    fontSize: 14,
    color: 'black',
  },
  inputFieldContainer: {
    marginHorizontal: 32,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D2D2D2',
    width: '100%',
    height: 55,
    paddingLeft: 19,
    color: '#A4A9B2',
    fontSize: 14,
  },
});
export default InputFieldStyle;
