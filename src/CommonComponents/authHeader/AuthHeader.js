import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
// -----------
import AuthHeaderStyle from './AuthHeaderStyle';

function AuthHeader(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.press}>
        <Image
          style={AuthHeaderStyle.backArrow}
          source={require('../../Assets/images/backWordArrow.png')}
        />
      </TouchableOpacity>
      <View style={AuthHeaderStyle.logoContainer}>
        <Image
          resizeMode={'contain'}
          style={AuthHeaderStyle.mainLogo}
          source={require('../../Assets/images/whiteLogo.png')}
        />
      </View>
    </View>
  );
}
export default AuthHeader;
