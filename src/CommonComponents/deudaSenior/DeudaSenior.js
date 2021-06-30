import React from 'react';
import {View, Text} from 'react-native';
// -----
import DeudaSeniorStyle from './DeudaSeniorStyle';

function DeudaSenior({item}) {
  return (
    <View style={DeudaSeniorStyle.mainContainer}>
      <View style={DeudaSeniorStyle.rowMainContainer}>
        <View style={DeudaSeniorStyle.pointerContainer}>
          <View
            style={[
              DeudaSeniorStyle.pointer,
              {backgroundColor: item.iconClr},
            ]}></View>
        </View>
        <View style={DeudaSeniorStyle.pointerDescriptionContainer}>
          <View>
            <Text
              style={[
                DeudaSeniorStyle.textAdjacentIcon,
                {fontWeight: item.fontweight},
              ]}>
              {item.iconDesc}
            </Text>
          </View>
        </View>

        <View style={DeudaSeniorStyle.middleEmptyContainer}></View>

        <View style={DeudaSeniorStyle.pointerValueContainer}>
          <View>
            <Text
              style={[
                DeudaSeniorStyle.textAdjacentPercentage,
                {fontWeight: item.fontweight},
              ]}>
              {item.priceValue}
            </Text>
          </View>
        </View>
        {/* <View style={DeudaSeniorStyle.beforeLastValueContainer}></View> */}
        <View style={DeudaSeniorStyle.pointerPercentageContainer}>
          <View>
            <Text
              style={[
                DeudaSeniorStyle.percentageValueText,
                {fontWeight: item.fontweight},
              ]}>
              {item.vlauePercentage}
            </Text>
          </View>
        </View>
        <View style={DeudaSeniorStyle.afterLastValueContainer}></View>
      </View>
    </View>
  );
}
export default DeudaSenior;
