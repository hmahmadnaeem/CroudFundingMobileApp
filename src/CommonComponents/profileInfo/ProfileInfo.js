import React from 'react';
import {View, Text, Image} from 'react-native';
// -----
import ProfileInfoStyle from './ProfileInfoStyle';
function ProfileInfo({item}) {
  return (
    <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
      <View style={{marginHorizontal: 20}}>
        <View style={ProfileInfoStyle.mainContainer}>
          <View style={ProfileInfoStyle.infoContainer}>
            <Image source={item.icon} />
            <View style={ProfileInfoStyle.alignTextInCol}>
              <Text style={ProfileInfoStyle.titleText}>{item.title}</Text>
              <Text style={[ProfileInfoStyle.descriptionText, {color:item.textColor}]}>{item.disc}</Text>
            </View>
          </View>
          <View style={ProfileInfoStyle.arrowContainer}>
            <Image source={require('../../Assets/icons/arrowRightSide.png')} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProfileInfo;
