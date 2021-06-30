import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';

// -----

import SignupWithNameStyle from './SignupWithNameStyle';
import AuthHeader from '../../../CommonComponents/authHeader/AuthHeader';
import ButtonFun from '../../../CommonComponents/Button/button';
import InputField from '../../../CommonComponents/inputField/InputField';
import Navigation from '../../../navigation/Navigation';
// -----

function SignupWithName({navigation}) {
  return (
    <ImageBackground
      source={require('../../../Assets/images/building.png')}
      style={SignupWithNameStyle.mainView}>
      <View style={SignupWithNameStyle.header}>
        <AuthHeader press={() => navigation.navigate('SignupOpenAccount')} />
      </View>
      <View style={SignupWithNameStyle.body}>
        <View style={SignupWithNameStyle.body_1}>
          <Text style={SignupWithNameStyle.mainText}>Ingresa tu Nombre</Text>
        </View>
        <View style={SignupWithNameStyle.body_2}>
          <Image source={require('../../../Assets/images/nameScreenImg.png')} />
        </View>
        <View style={SignupWithNameStyle.inputContainer}>
          <View>
            <InputField nameOnInputField="Nombre(s)" Nombre="Nombre(s)" />
          </View>
          <View style={SignupWithNameStyle.firstNameContainer}>
            <InputField
              firstNameOnInputField="Apellido Paterno"
              firstName="Apellido Paterno(s)"
            />
          </View>
          <View>
            <InputField
              lastNameOnInputField="Apellido Paterno"
              lastName="Apellido Paterno"
            />
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <View style={SignupWithNameStyle.footer}>
          <View style={SignupWithNameStyle.buttonContainer}>
            <ButtonFun
              press={() => navigation.navigate('bottomNav')}
              text="Continuar"
              backgroundColor="#227BFF"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
export default SignupWithName;
