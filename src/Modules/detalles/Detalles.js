import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
//-----
import DetallesStyle from './DetallesStyle';
import DeudaSenior from '../../CommonComponents/deudaSenior/DeudaSenior';
import Border from '../../CommonComponents/border/Border';
import TextSpaceBetween from '../../CommonComponents/textSpaceBetween/TextSpaceBetween';

function Detalles() {
  const pointDescArr = [
    {
      iconClr: '#227BFF',
      iconDesc: 'Deuda Senior',
      priceValue: '$2,000,000',
      vlauePercentage: '20%',
    },
    {
      iconClr: '#23C49F',
      iconDesc: 'Deuda Preferente',
      priceValue: '$2,000,000',
      vlauePercentage: '20%',
    },
    {
      iconClr: '#FCBB28',
      iconDesc: 'Deuda Junior',
      priceValue: '$2,000,000',
      vlauePercentage: '20%',
    },
    {
      iconClr: '#FC8043',
      iconDesc: 'Capital desarrollador',
      priceValue: '$2,000,000',
      vlauePercentage: '20%',
    },
    {
      iconClr: '#FB3266',
      iconDesc: 'Preventa',
      priceValue: '$2,000,000',
      vlauePercentage: '20%',
    },
    {
      // iconClr: '',
      iconDesc: 'Preventa',
      priceValue: '$2,000,000',
      vlauePercentage: '20%',
      fontweight: 'bold',
    },
  ];

  const documentTextArr = [
    {
      leftText: 'Documento',
      fontSizeLeft: 14,
      fontWeightLeft: 'bold',
      fontColorLeft: '#959595',

      rightText: 'Ver',
      fontSizeRight: 14,
      fontWeightRight: 'bold',
      fontColorRight: '#959595',
    },

    {
      leftText: 'Documento 1',
      fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',

      rightText: 'Ver documento',
      fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#1E75E0',
    },

    {
      leftText: 'Documento 2',
      fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',
      // add margin top, will add in on but will appear in both.
      leftMarginTop: 8,

      rightText: 'Ver documento',
      fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#1E75E0',
    },

    {
      leftText: 'Documento 3',
      fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',
      // add margin top, will add in on but will appear in both.
      leftMarginTop: 8,

      rightText: 'Ver documento',
      fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#1E75E0',
    },
  ];
  // -----

  const responsablesTextArr = [
    {
      leftText: 'Nombre',
      fontSizeLeft: 14,
      fontWeightLeft: 'bold',
      fontColorLeft: '#959595',

      rightText: 'Cargo',
      fontSizeRight: 14,
      fontWeightRight: 'bold',
      fontColorRight: '#959595',
    },

    {
      leftText: 'Juan Pérez',
      fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',

      rightText: 'Representante legal',
      fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#000',
    },

    {
      leftText: 'Juan Pérez',
      // fontSizeLeft: 14,
      fontWeightLeft: '300',
      fontColorLeft: '#000',

      rightText: 'Representante legal',
      // fontSizeRight: 14,
      fontWeightRight: '300',
      fontColorRight: '#000',
    },
  ];

  // Array calling end here
  return (
    <ScrollView style={DetallesStyle.mainContainer}>
      <View style={DetallesStyle.addMarginEstructura}>
        <Text style={DetallesStyle.estrutureText}>Estructura de capital</Text>
        <Text style={DetallesStyle.estasText}>
          Estas son las fuentes de donde proviene el dinero para cubrir el costo
          total requerido por el proyecto.
        </Text>
        <View style={DetallesStyle.pinrterValueArryContainer}>
          {pointDescArr.map(item => {
            return <DeudaSenior item={item} />;
          })}
        </View>
        <View style={DetallesStyle.detallesBorderContainer}>
          <Border />
        </View>
        <Text style={DetallesStyle.detallesText}>Detalles del presupuesto</Text>
        <Text style={DetallesStyle.detallesDescTextOne}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>

        <Text style={DetallesStyle.detallesDescTextTwo}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={DetallesStyle.documentosText}>Documentos</Text>
        {documentTextArr.map(item => {
          return <TextSpaceBetween item={item} />;
        })}
        <Text style={DetallesStyle.responsablesText}>
          Responsables del proyecto
        </Text>

        {responsablesTextArr.map(item => {
          return <TextSpaceBetween item={item} />;
        })}
        <Text style={DetallesStyle.sobreText}>Sobre el desarrollador</Text>
        <Image
          style={DetallesStyle.fibraImg}
          source={require('../../Assets/images/fibra.png')}
        />
        <Text style={DetallesStyle.fibraText}>Fibra Cero</Text>
        <Text style={DetallesStyle.fibraDescriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        {/*  */}
      </View>
    </ScrollView>
  );
}
export default Detalles;
