import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
// -----
import ContactoStyle from './ContactoStyle';
import MenuTop from '../../CommonComponents/menuTop/MenuTop';
import Border from '../../CommonComponents/border/Border';
import Button from '../../CommonComponents/Button/button';

function Contacto({navigation}) {
  return (
    <ScrollView style={ContactoStyle.mainContainer}>
      <MenuTop
        text="Contacto"
        headerIcon={require('../../Assets/icons/menuIcon.png')}
      />
      {/* View for adding margin top */}
      <View style={{marginTop: 26}} />
      <Border />
      <Text style={ContactoStyle.needHelpText}>¿Necesitas ayuda?</Text>
      <Text style={ContactoStyle.estamosText}>Estamos aquí para ayudarte</Text>
      <View style={ContactoStyle.imageContainer}>
        <Image source={require('../../Assets/images/success.png')} />
      </View>
      <View style={ContactoStyle.btnContainer}>
        <Button
          press={() => navigation.navigate('Alfa')}
          text="Contactar en WhatsApp"
          backgroundColor="#227BFF"
        />
      </View>
      <View style={ContactoStyle.borderContainer}>
        <Border />
      </View>

      <View style={ContactoStyle.textIconContainer}>
        <Text style={ContactoStyle.paraText}>
          Para respuestas inmediatas visita nuestra sección de
        </Text>
        <Text style={ContactoStyle.prequntasText}>Preguntas Frecuentes</Text>
        <Text style={ContactoStyle.conectaText}>Conecta con nosotros:</Text>
        <View style={ContactoStyle.iconContainer}>
          <Image source={require('../../Assets/icons/fbIcon.png')} />
          <Image source={require('../../Assets/icons/twitterIcon.png')} />
          <Image source={require('../../Assets/icons/linkedinIcon.png')} />
        </View>
      </View>

      {/* End */}
    </ScrollView>
  );
}
export default Contacto;
