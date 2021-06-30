import React from 'react';
import {View, Text, TextInput} from 'react-native';
import InputFieldStyle from './InputFieldStyle';

function InputField(props) {
  return (
    <View>
      <View style={InputFieldStyle.textContainer}>
        <Text>
          {[
            props.textOnInputFiled,
            props.textOnPasswordFiled,
            props.repeatPassword,
            props.nameOnInputField,
            props.firstNameOnInputField,
            props.lastNameOnInputField,
          ]}
        </Text>
        <Text style={{fontWeight: '400', color: 'red', fontSize: 14}}> *</Text>
      </View>
      <View style={InputFieldStyle.inputFieldContainer}>
        <TextInput
          style={InputFieldStyle.inputField}
          // {props.password}
          // placeholder="pleaceholder text"
          // placeholderTextColor="white"
        >
          {[
            props.email,
            props.password,
            props.lastName,
            props.Nombre,
            props.firstName,
          ]}
        </TextInput>
      </View>
    </View>
  );
}
export default InputField;
