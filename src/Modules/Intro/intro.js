import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// -----------------
import IntroStyle from './introStyle';
import ButtonFun from '../../CommonComponents/Button/button';

function IntroFun({navigation}) {
  return (
    <ScrollView style={IntroStyle.mainView}>
      <View style={IntroStyle.oneOfOne}>
        <Image
          style={IntroStyle.logoImg}
          source={require('../../Assets/images/whiteLogo.png')}
        />
      </View>
      {/* End oneOfOne */}

      <View style={IntroStyle.textView}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginDark')}>
          <Text style={IntroStyle.mainText}>CROWDFUNDING</Text>
        </TouchableOpacity>
        <Text style={IntroStyle.mainText}>INMOBILIARIO</Text>
      </View>

      {/* End twoOfOne */}
      <View style={IntroStyle.buttonContainer}>
        <View style={IntroStyle.fristBtn}>
          <ButtonFun
            press={() => navigation.navigate('Login')}
            style={IntroStyle.btnStyle}
            text="Iniciar sesión"
            backgroundColor="#227BFF"
          />
        </View>

        <View style={IntroStyle.secondBtn}>
          <ButtonFun text="Crear cuenta" backgroundColor="#0C1327" />
        </View>
      </View>
      {/* End threeOfOne */}
    </ScrollView>
  );
}
export default IntroFun;
// ------------

//  <View style={Style.one}>
//     <View style={Style.one_1}></View>
//     <View style={Style.one_2}></View>
//     <View style={Style.one_3}></View>
//   </View>

//   <View style={Style.two}>
//     <View style={Style.two_1}></View>
//     <View style={Style.two_2}></View>
//   </View>
//   <View style={Style.three}>
//     <View style={Style.three_1}>
//       <View style={Style.three_1_1}></View>
//       <View style={Style.three_1_2}></View>
//       <View style={Style.three_1_3}></View>
//       <View style={Style.three_1_4}></View>
//     </View>
//     <View style={Style.three_2}></View>
//     <View style={Style.three_3}>
//       <View style={Style.three_3_1}></View>
//       <View style={Style.three_3_2}>
//         <View style={Style.three_3_2_1}></View>
//         <View style={Style.three_3_2_2}></View>
//         <View style={Style.three_3_2_3}></View>
//       </View>
//     </View>
//   </View>
