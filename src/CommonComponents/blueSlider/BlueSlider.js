import React from 'react';
import {View, Text} from 'react-native';
// -----
import BlueSliderStyle from './BlueSliderStyle';

function BlueSlider(props) {
  return (
    <View style={BlueSliderStyle.mainContainer}>
      <Text style={BlueSliderStyle.sliderTopMiddleText}>
        {props.sliderMainHeadingText}
      </Text>
      <View style={BlueSliderStyle.mianGrayContainer}>
        <View style={BlueSliderStyle.blueColorContainer}>
          <View style={BlueSliderStyle.createCircleOnSlider}></View>
        </View>
      </View>
      <View style={BlueSliderStyle.sliderLowerTextContainer}>
        <View style={BlueSliderStyle.sliderLeftTextContainer}>
          <Text style={BlueSliderStyle.sliderLowerLeftFirstText}>
            {props.leftFirstText}
          </Text>
          <Text style={BlueSliderStyle.sliderLowerLeftSecondText}>
            {props.leftSecondText}
          </Text>
        </View>
        <View style={BlueSliderStyle.sliderRightTextContainer}>
          <Text style={BlueSliderStyle.sliderLowerRightFirstText}>
            {props.rightFirstText}
          </Text>
          <Text style={BlueSliderStyle.sliderLowerRightSecondText}>
            {props.rightSecondText}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default BlueSlider;
