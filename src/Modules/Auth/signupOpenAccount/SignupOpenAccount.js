import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';

// -----
import SignupOpenAccountStyle from './SignupOpenAccountStyle';

// -----
import AuthHeader from '../../../CommonComponents/authHeader/AuthHeader';
import InputField from '../../../CommonComponents/inputField/InputField';
import ButtonFun from '../../../CommonComponents/Button/button';
import Navigation from '../../../navigation/Navigation';

function SignupOpenAccount({navigation}) {
  return (
    <ImageBackground
      style={SignupOpenAccountStyle.mainContainer}
      source={require('../../../Assets/images/building.png')}>
      <ScrollView>
        <View style={SignupOpenAccountStyle.header}>
          <AuthHeader press={() => navigation.goBack()} />
        </View>
        <View style={SignupOpenAccountStyle.body}>
          <View style={SignupOpenAccountStyle.body_1}>
            <Text style={SignupOpenAccountStyle.mainHeading}>Abrir Cuenta</Text>
          </View>
          <View style={SignupOpenAccountStyle.body_2}>
            <InputField textOnInputFiled="Email" email="Email" />
            <View style={SignupOpenAccountStyle.passwordContainer}>
              <InputField
                textOnPasswordFiled="Contraseña"
                password="Contraseña"
              />
            </View>
            <InputField
              repeatPassword="Repetir contraseña*"
              lastName="Apellido Paterno"
            />
          </View>
          <View style={SignupOpenAccountStyle.body_3}></View>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={SignupOpenAccountStyle.footer}>
            <View style={SignupOpenAccountStyle.buttonContainer}>
              <ButtonFun
                press={() => navigation.navigate('SignupWithName')}
                text="Abrir Cuenta"
                backgroundColor="#227BFF"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default SignupOpenAccount;
