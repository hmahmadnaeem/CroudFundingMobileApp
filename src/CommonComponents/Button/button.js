import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import ButtonStyle from './buttonStyle';

function ButtonFun(props) {
  const bgColor = {
    backgroundColor: props.backgroundColor || 'yellow',
  };
  return (
    <View style={ButtonStyle.buttonAdj}>
      <TouchableOpacity onPress={props.press}>
        <View style={[ButtonStyle.buttonDimention, bgColor]}>
          <Text style={[ButtonStyle.buttonText]}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonFun;
// {text, backgroundColor, press}
