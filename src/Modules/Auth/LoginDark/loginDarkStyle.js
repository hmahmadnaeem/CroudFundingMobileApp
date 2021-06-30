import {StyleSheet} from 'react-native';

const LoginDarkStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#0C1327',
  },
  mainLogo: {
    marginTop: 83,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputView: {
    marginLeft: 33,
    marginRight: 33,
  },
  inputText1: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 145,
    height: 60,
    width: '100%',
    paddingLeft: 19,
  },
  inputPadding: {
    marginTop: 20,
  },
  passForgot: {
    marginTop: 17,
    marginLeft: 33,
    color: 'white',
    marginBottom: 322,
  },
  btnContainer: {
    alignSelf: 'center',
    marginHorizontal: 32,
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  //   inputText2: {
  //     borderColor: 'white',
  //     borderWidth: 1,
  //     borderRadius: 5,
  //     marginTop: 20,
  //     height: 60,
  //     width: '100%',
  //     paddingLeft: 19,
  //   },
});
export default LoginDarkStyle;
