import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
// -----
import DrawerMenuStyle from './DrawerMenuStyle';
import Border from '../../CommonComponents/border/Border';
import MenuTextContainer from '../../CommonComponents/menuTextContainer/MenuTextContainer';

function DrawerMenu() {
  const menuTextArr = [
    {
      iconImg: require('../../Assets/icons/historyIcon.png'),
      imgAdjacentText: 'Historial de inversiones',
    },
    {
      iconImg: require('../../Assets/icons/cashReceivedIcon.png'),
      imgAdjacentText: 'Pagos recibios',
    },
    {
      iconImg: require('../../Assets/icons/documentIcon.png'),
      imgAdjacentText: 'Documentos',
    },
    {
      iconImg: require('../../Assets/icons/faqIcon.png'),
      imgAdjacentText: 'FAQ',
    },
    {
      iconImg: require('../../Assets/icons/fiberIcon.png'),
      imgAdjacentText: 'Fibra Cero',
    },
    {
      iconImg: require('../../Assets/icons/verfiedBlueIcon.png'),
      imgAdjacentText: 'Términos y condiciones',
    },
    {
      iconImg: require('../../Assets/icons/privacyBlueIcon.png'),
      imgAdjacentText: 'Aviso de privacidad',
    },
    {
      iconImg: require('../../Assets/icons/signOffIcon.png'),
      imgAdjacentText: 'Cerrar sesión',
    },
  ];
  return (
    <ScrollView style={DrawerMenuStyle.mainContainer}>
      <View style={DrawerMenuStyle.whiteBlackContainer}>
        <View style={DrawerMenuStyle.whiteBg}>
          <View style={DrawerMenuStyle.userImageContainer}>
            <Image source={require('../../Assets/icons/user.png')} />
          </View>
          <Text style={DrawerMenuStyle.juanText}>Juan Pérez</Text>
          <Text style={DrawerMenuStyle.verificacioText}>
            Verificación completada
          </Text>
          <View style={DrawerMenuStyle.headerBorderContainer}>
            <Border />
          </View>

          {menuTextArr.map(item => {
            return <MenuTextContainer item={item} />;
          })}
        </View>
        {/* <View style={DrawerMenuStyle.blurOverLay}>
          <Text style={{color: 'white'}}> text in black</Text>
        </View> */}
      </View>
    </ScrollView>
  );
}

export default DrawerMenu;
