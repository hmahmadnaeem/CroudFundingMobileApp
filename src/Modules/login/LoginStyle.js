import {StyleSheet} from 'react-native';
const LoginStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'gray',
  },
  header: {
    // backgroundColor: 'blue',
  },
  body: {
    backgroundColor: 'white',
    marginTop: 53,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  body_1: {
    alignItems: 'center',
  },
  headingText: {
    // textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 23,
  },
  inputContainer: {
    marginTop: 50,
  },
  emailInput: {
    marginBottom: 21,
  },

  forgotPass: {
    marginTop: 19,
    fontSize: 14,
    marginHorizontal: 32,
    textAlign: 'right',
  },
  footer: {
    marginTop: 225,
    backgroundColor: 'white',
  },
  btnContainer: {
    paddingBottom: 62,
  },
});
export default LoginStyle;
