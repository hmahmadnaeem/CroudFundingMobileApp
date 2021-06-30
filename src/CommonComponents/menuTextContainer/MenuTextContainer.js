import React from 'react';
import {View, Text, Image} from 'react-native';
// -----
import MenuTextContainerStyle from './MenuTextContainerStyle';

function MenuTextContainer({item}) {
  return (
    <View style={MenuTextContainerStyle.mainContainer}>
      <Image source={item.iconImg} />
      <Text style={MenuTextContainerStyle.imgAdjacentText}>
        {item.imgAdjacentText}
      </Text>
    </View>
  );
}
export default MenuTextContainer;
