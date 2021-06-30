import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
// -----
import CampañaStyle from './CampañaStyle';
import Border from '../../CommonComponents/border/Border';
import Punto from '../../CommonComponents/punto/Punto';

function Campaña() {
  const puntoArr = [
    {
      greenClickImage: require('../../Assets/icons/greenClickIcon.png'),

      puntoTitle: 'Punto destacado No. 1',

      puntoDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    },

    {
      greenClickImage: require('../../Assets/icons/greenClickIcon.png'),

      puntoTitle: 'Punto destacado No. 2',

      puntoDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    },

    {
      greenClickImage: require('../../Assets/icons/greenClickIcon.png'),

      puntoTitle: 'Punto destacado No. 3',

      puntoDescription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ',
    },
  ];

  return (
    <ScrollView style={CampañaStyle.mainContainer}>
      <View style={CampañaStyle.addMargin}>
        <Text style={CampañaStyle.resumenText}>Resumen</Text>
        <Text style={CampañaStyle.resumenTextDescription1}>
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
        <Text style={CampañaStyle.resumenTextDescription2}>
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
        <View style={CampañaStyle.indicadoresBorderContainer}>
          <Border />
        </View>
        <Text style={CampañaStyle.indicadoresText}>Indicadores</Text>
        <View style={CampañaStyle.iconTextValueAdjust}>
          <View style={CampañaStyle.indicadoresImgDescriptionContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../Assets/icons/pieChartIcon.png')} />
              <Text style={CampañaStyle.textAdjacentImg}>
                Financiamiento sobre costo
              </Text>
            </View>
          </View>
          {/*  */}
          <View style={CampañaStyle.indicadoresValueContainer}>
            <Text>48%</Text>
          </View>
        </View>
        {/* ----- */}
        <View style={CampañaStyle.iconTextValueAdjust}>
          <View style={CampañaStyle.indicadoresImgDescriptionContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../Assets/icons/verticalAlignIcon.png')}
              />
              <Text style={CampañaStyle.textAdjacentImg}>
                Valor de la garantía sobre el crédito
              </Text>
            </View>
          </View>
          {/*  */}
          <View style={CampañaStyle.indicadoresValueContainer}>
            <Text>150%</Text>
          </View>
        </View>
        {/* ----- */}
        <View style={CampañaStyle.iconTextValueAdjust}>
          <View style={CampañaStyle.indicadoresImgDescriptionContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../Assets/icons/showChartIcon.png')} />
              <Text style={CampañaStyle.textAdjacentImg}>
                Control de flujos
              </Text>
            </View>
          </View>
          {/*  */}
          <View style={CampañaStyle.indicadoresValueContainer}>
            <Text>Entrega gasto por gasto</Text>
          </View>
        </View>
        {/* ----- */}

        <View style={CampañaStyle.puntosBorderContainer}>
          <Border />
        </View>
        <Text style={CampañaStyle.puntosText}>Puntos destacados</Text>
        {/* Calling component */}

        {puntoArr.map(item => {
          return <Punto item={item} />;
        })}

        <View style={CampañaStyle.ubicaciónBorderContainer}>
          <Border />
        </View>
        <Text style={CampañaStyle.ubicaciónText}>Ubicación</Text>
        <View style={CampañaStyle.mapImageContainer}>
          <Image
            style={CampañaStyle.mapImg}
            source={require('../../Assets/images/map.png')}
          />
        </View>
        {/*  */}
      </View>
    </ScrollView>
  );
}
export default Campaña;
