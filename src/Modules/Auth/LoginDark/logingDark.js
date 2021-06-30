import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
// ---------------------
import LoginDarkStyle from './loginDarkStyle';
import ButtonFun from '../../../CommonComponents/Button/button';

function LoginDarkFun({navigation}) {
  return (
    <>
      <ScrollView style={LoginDarkStyle.mainView}>
        <StatusBar barStyle="light-content" />
        <Image
          style={LoginDarkStyle.mainLogo}
          source={require('../../../Assets/images/whiteLogo.png')}
        />

        <View style={LoginDarkStyle.inputView}>
          <TextInput
            style={LoginDarkStyle.inputText1}
            placeholder="Correo electrónico"
            placeholderTextColor="white"
          />
        </View>
        <View style={LoginDarkStyle.inputView}>
          <TextInput
            style={[LoginDarkStyle.inputText1, LoginDarkStyle.inputPadding]}
            placeholder="Contraseña"
            placeholderTextColor="white"
          />
        </View>

        <Text style={LoginDarkStyle.passForgot}>¿Olvidaste tu contraseña?</Text>

        <View style={LoginDarkStyle.btnContainer}>
          <ButtonFun
            press={() => navigation.navigate('Intro')}
            text="Login"
            backgroundColor="#FF3366"
          />
        </View>

        {/* ending View */}
      </ScrollView>
    </>
  );
}
export default LoginDarkFun;
