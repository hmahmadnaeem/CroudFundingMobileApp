import React from 'react';
import {View, Image, Text, ScrollView, ImageBackground} from 'react-native';
// ----------
import LoginStyle from './LoginStyle';
import AuthHeader from '../../CommonComponents/authHeader/AuthHeader';
import InputField from '../../CommonComponents/inputField/InputField';
import ButtonFun from '../../CommonComponents/Button/button';
function Login({navigation}) {
  return (
    <ImageBackground
      style={LoginStyle.mainView}
      source={require('../../Assets/images/building.png')}>
      <ScrollView>
        <View style={LoginStyle.header}>
          {/* <View style={{height: 211, backgroundColor: 'orange'}}></View> */}
          <AuthHeader press={() => navigation.navigate('Intro')} />
        </View>
        <View style={LoginStyle.body}>
          <View style={LoginStyle.body_1}>
            <Text style={LoginStyle.headingText}>Iniciar sesión</Text>
          </View>
          <View style={LoginStyle.inputContainer}>
            <View style={LoginStyle.emailInput}>
              <InputField textOnInputFiled="Email" email="Email" />
            </View>

            <InputField
              textOnPasswordFiled="Contraseña"
              password="Contraseña"
            />
            <Text style={LoginStyle.forgotPass}>¿Olvidaste tu contraseña?</Text>
          </View>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={LoginStyle.footer}>
            <View style={LoginStyle.btnContainer}>
              <ButtonFun
                press={() => navigation.navigate('SignupOpenAccount')}
                text="Iniciar sesión"
                backgroundColor="#227BFF"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default Login;
