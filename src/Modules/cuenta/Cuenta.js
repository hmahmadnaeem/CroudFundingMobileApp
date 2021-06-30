import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
// -----

import CuentaStyle from './CuentaStyle';
import MenuTop from '../../CommonComponents/menuTop/MenuTop';
import Border from '../../CommonComponents/border/Border';
import PortfolioCard from '../../CommonComponents/portfolioCard/PortfolioCard';

function Cuenta() {
  return (
    <ScrollView style={CuentaStyle.mainContainer}>
      <MenuTop 
      headerIcon={require('../../Assets/icons/menuIcon.png')}
      text="Cuenta" />

      <View style={CuentaStyle.borderView}>
        <View style={CuentaStyle.contentView}>
          <View style={CuentaStyle.addBorder}>
            <Text style={CuentaStyle.resumenText}>Resumen</Text>
          </View>
          <Text style={CuentaStyle.transaccionesText}>Transacciones</Text>
        </View>
      </View>
      {/*  */}
      <View style={CuentaStyle.portfolueContainer}>
        <Text style={CuentaStyle.valorText}>VALOR PORTAFOLIO</Text>
        <Text style={CuentaStyle.mainPrice}>$100,000</Text>
      </View>
      {/*  */}
      <View style={CuentaStyle.divideValueContainer}>
        <View style={CuentaStyle.leftValueContainer}>
          <View style={CuentaStyle.convertToRow}>
            <Image source={require('../../Assets/icons/arrowUpIcon.png')} />
            <Text style={CuentaStyle.halfValue}> $500</Text>
          </View>
          <Text style={CuentaStyle.priceDescriptionOne}>
            Ganancias Diarias{' '}
          </Text>
          <Text style={CuentaStyle.priceDescriptionOne}>Estimadas</Text>
        </View>

        <View style={CuentaStyle.rightValueContainer}>
          <Text style={CuentaStyle.halfValue}> $500</Text>
          <Text style={CuentaStyle.priceDescriptionOne}>
            Ganancias Diarias{' '}
          </Text>
          <Text style={CuentaStyle.priceDescriptionOne}>Estimadas</Text>
        </View>
      </View>
      <View style={CuentaStyle.portafolioTextContainer}>
        <Text style={CuentaStyle.portafolioText}>Portafolio</Text>
      </View>
      {/*  */}
      <View style={CuentaStyle.borderContainer}><Border/></View>
      <View><PortfolioCard/></View>
       {/*  */}
      <View style={CuentaStyle.borderContainer}><Border/></View>
      <View><PortfolioCard/></View>
      {/*  */}
      <View style={CuentaStyle.borderContainer}><Border/></View>
      <View><PortfolioCard/></View>


      {/* End */}
    </ScrollView>
  );
}
export default Cuenta;
