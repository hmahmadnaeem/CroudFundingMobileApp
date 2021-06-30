import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
// -----
import AjustesStyle from './AjustesStyle';
import MenuTop from '../../CommonComponents/menuTop/MenuTop';
import ProfileInfo from '../../CommonComponents/profileInfo/ProfileInfo';
import Border from '../../CommonComponents/border/Border';

function Ajustes() {
  const data = [
    {
      icon: require('../../Assets/icons/user.png'),
      title: 'Datos personales',
      disc: 'Completado',
      textColor:'#227BFF',
      
    },
    {
      icon: require('../../Assets/icons/location.png'),
      title: 'Dirección',
      disc: 'Pendiente',
      textColor:'#FF3366',
    },
    {
      icon: require('../../Assets/icons/bank.png'),
      title: 'Cuenta bancaria',
      disc: 'Pendiente',
      textColor:'#FF3366',
    },
    {
      icon: require('../../Assets/icons/userProfile.png'),
      title: 'Conocimiento inversionista',
      disc: 'Pendiente',
      textColor:'#FF3366',
    },
    {
      icon: require('../../Assets/icons/benifi.png'),
      title: 'Beneficiarios',
      disc: 'Pendiente',
      textColor:'#FF3366',
    },
    {
      icon: require('../../Assets/icons/search.png'),
      title: 'Conocimiento de riesgos',
      disc: 'Pendiente',
      textColor:'#FF3366',
    },
  ];
  const AuthenticationArr = [
    {
      icon: require('../../Assets/icons/security.png'),
      title: 'Contraseña',
      disc: 'Cambiar factor de autenticación principal',
    },
    {
      icon: require('../../Assets/icons/lock.png'),
      title: 'NIP',
      disc: 'Cambiar factor de autenticación secundario',
    },
    {
      icon: require('../../Assets/icons/mail.png'),
      title: 'Email',
      disc: 'Cambiar correo electrónico',
    },
  ];

  return (
    <ScrollView style={AjustesStyle.mainContainer}>
      <MenuTop
      headerIcon={require('../../Assets/icons/menuIcon.png')}
      text="Ajustes" />

      <View style={AjustesStyle.perfilContainer}>
        <Text style={AjustesStyle.prefilText}>Perfil</Text>
      </View>

      {data.map(item => {
        return <ProfileInfo item={item} />;
      })}

      <View style={AjustesStyle.seguridadTextContainer}>
        <Text style={AjustesStyle.seguridadText}>Seguridad</Text>
      </View>
      {AuthenticationArr.map(item => {
        return <ProfileInfo item={item} />;
      })}
    </ScrollView>
  );
}
export default Ajustes;
