import {StyleSheet} from 'react-native';

const SignupWithNameStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: 'white',
  },

  body: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 53,
  },
  body_1: {
    // flex: 1,
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  mainText: {
    // fontSize: 24,
    fontWeight: '700',
    marginTop: 23,
  },
  body_2: {
    marginTop: 31,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
  },

  firstNameContainer: {
    marginTop: 21,
    marginBottom: 21,
  },

  footer: {
    marginTop: 63,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  buttonContainer: {},
});

export default SignupWithNameStyle;
