import React from 'react';
import {ScrollView, View, Text} from 'react-native';
//-----
import RendimientoStyle from './RendimientoStyle';
import BlueSlider from '../../CommonComponents/blueSlider/BlueSlider';
import TextSpaceBetween from '../../CommonComponents/textSpaceBetween/TextSpaceBetween';
import Border from '../../CommonComponents/border/Border';
import DetallesStyle from '../detalles/DetallesStyle';

function Rendimiento() {
  const blueSliderLowerTextArr = [
    {
      leftText: 'Inversión total',
      fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',

      rightText: '$100,000',
      fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#000',
    },
    {
      leftText: 'Plazo',
      fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',

      rightText: '6 meses',
      fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#000',
    },
    {
      leftText: 'Rendimiento estimado',
      fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',

      rightText: '$5,600',
      fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#000',
    },

    {
      leftText: 'Al final del plazo recibes',
      fontSizeLeft: 14,
      fontWeightLeft: 'bold',
      fontColorLeft: '#000',

      rightText: '$105,600',
      fontSizeRight: 14,
      fontWeightRight: 'bold',
      fontColorRight: '#000',
    },
  ];
  return (
    <ScrollView style={RendimientoStyle.mainContainer}>
      <View style={{marginHorizontal: 30}}>
        <Text style={RendimientoStyle.calculadoraText}>Calculadora</Text>
        <View style={RendimientoStyle.montoTextContainer}>
          <Text style={RendimientoStyle.montoText}>1. Monto a asdf</Text>
          <Text style={RendimientoStyle.invertirText}>invertir</Text>
        </View>
        <BlueSlider
          sliderMainHeadingText="$80,000"
          leftFirstText="$50,00"
          leftSecondText="0"
          rightFirstText="$50,00"
          rightSecondText="0"
        />
        <Text style={RendimientoStyle.plazoText}>
          2. Plazo estimado para fines del cálculo
        </Text>

        <BlueSlider
          sliderMainHeadingText="6 Meses"
          leftFirstText="3"
          leftSecondText="meses"
          rightFirstText="24"
          rightSecondText="meses"
        />
        <View style={RendimientoStyle.borderContainerBelowBlueSlider}>
          <Border />
        </View>
        {blueSliderLowerTextArr.map(item => {
          return <TextSpaceBetween item={item} />;
        })}
      </View>
    </ScrollView>
  );
}
export default Rendimiento;
