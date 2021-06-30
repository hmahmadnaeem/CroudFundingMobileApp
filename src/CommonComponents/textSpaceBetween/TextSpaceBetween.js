import React from 'react';
import {View, Text} from 'react-native';
import TextSpaceBetweenStyle from './TextSpaceBetweenStyle';
// -----

function TextSpaceBetween({item}) {
  return (
    <View style={TextSpaceBetweenStyle.mainRowContainerDocumetos}>
      <View style={TextSpaceBetweenStyle.leftTextContainerDocumetos}>
        <Text
          style={[
            TextSpaceBetweenStyle.leftSideRowText,
            {
              fontSize: item.fontSizeLeft,
              fontWeight: item.fontWeightLeft,
              color: item.fontColorLeft,
              marginTop: item.leftMarginTop,
            },
          ]}>
          {item.leftText}
        </Text>
      </View>
      <View style={TextSpaceBetweenStyle.rightTextContainerDocumetos}>
        <Text
          style={[
            TextSpaceBetweenStyle.rightSideRowText,
            {
              fontSize: item.fontSizeRight,
              fontWeight: item.fontWeightRight,
              color: item.fontColorRight,
            },
          ]}>
          {item.rightText}
        </Text>
      </View>
    </View>
  );
}
export default TextSpaceBetween;
