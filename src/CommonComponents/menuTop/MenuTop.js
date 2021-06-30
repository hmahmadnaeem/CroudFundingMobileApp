import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// -----
import MenuTopStyle from './MenuTopStyle';

function MenuTop(props) {
  const navigation = useNavigation();

  return (
    <View style={MenuTopStyle.iconTextContainer}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={MenuTopStyle.menuIconContainer}>
        <Image source={props.headerIcon} />
      </TouchableOpacity>
      {/* <Image style={MenuTopStyle.menuIconContainer} source={require('../../Assets/icons/user.png')} 
        /> */}

      <View style={MenuTopStyle.invertTextContainer}>
        <Text style={[MenuTopStyle.invertText, {color: props.textColor}]}>
          {props.text}
        </Text>
      </View>
    </View>
  );
}
export default MenuTop;
