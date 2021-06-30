import React from 'react';
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';
//-----
import AlfaStyle from './AlfaStyle';
import MenuTop from '../menuTop/MenuTop';
import Border from '../border/Border';

function Alfa() {
  return (
    <ScrollView style={AlfaStyle.mainContainer}>
      <View>
        <ImageBackground
          style={AlfaStyle.bgImgContainer}
          source={require('../../Assets/images/houseImgHeader.png')}>
          <MenuTop
            headerIcon={require('../../Assets/icons/arrowLeftSide.png')}
            text="Desarrollo Alfa"
            textColor="#ffffff"
          />

          <View style={AlfaStyle.bgImageTextContainer}>
            <View style={AlfaStyle.textMarginOnImg}>
              <Text style={AlfaStyle.desarrolloText}>Desarrollo Alfa</Text>
              <View style={AlfaStyle.textCvtRow}>
                <View style={AlfaStyle.leftSideContainer}>
                  <Text style={AlfaStyle.proText}>Por Desarrollador Uno</Text>
                </View>
                <View style={AlfaStyle.rightSideContainer}>
                  <Image source={require('../../Assets/icons/timeIcon.png')} />
                  <Text style={AlfaStyle.quedanText}>Quedan 39 días</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={AlfaStyle.marginAdjust}>
          <View style={AlfaStyle.grayClrStrip}>
            <View style={AlfaStyle.blueClrStrip}>
              <Text style={AlfaStyle.percentageText}>30%</Text>
            </View>
          </View>
          <View style={AlfaStyle.priceTextCvtRow}>
            <Text>$1.5MM recaudado</Text>
            <Text>Min $2.5MM</Text>
            <Text>Max $4.5MM</Text>
          </View>
          <View style={AlfaStyle.borderContainer}>
            <Border />
          </View>

          <Text style={AlfaStyle.loremText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <View style={AlfaStyle.borderContainer}>
            <Border />
          </View>
          <View style={AlfaStyle.grayTableContainer}>
            <View style={AlfaStyle.leftStideTableContainer}>
              <View style={AlfaStyle.leftInternalOfLeft}>
                <Text style={AlfaStyle.tableTextBold}>Instrumento:</Text>
                <Text style={AlfaStyle.tableTextBold}>Plazo:</Text>
                <Text style={AlfaStyle.tableTextBold}>Pago de intereses:</Text>
                <Text style={AlfaStyle.tableTextBold}>Tasa anual fija:</Text>
              </View>
              <View style={AlfaStyle.rightInternalOfLeft}>
                <Text style={AlfaStyle.tableTextNormal}>Deuda</Text>
                <Text style={AlfaStyle.tableTextNormal}>12 meses</Text>
                <Text style={AlfaStyle.tableTextNormal}>Anual</Text>
                <Text style={AlfaStyle.tableTextNormal}>15%</Text>
              </View>
            </View>
            <View style={AlfaStyle.rightStideTableContainer}>
              <View style={AlfaStyle.leftInternalOfRight}>
                <Text style={AlfaStyle.tableTextBold}>
                  Mínimo para invertir:
                </Text>
                <Text style={AlfaStyle.tableTextBold}>Comisión:</Text>
                <Text style={AlfaStyle.tableTextBold}>Garantía:</Text>
                <Text style={AlfaStyle.tableTextBold}>TIR anual estimada:</Text>
              </View>
              <View style={AlfaStyle.RightInternalOfRight}>
                <Text style={AlfaStyle.tableTextNormal}>$50,000</Text>
                <Text style={AlfaStyle.tableTextNormal}>2.5% anual</Text>
                <Text style={AlfaStyle.tableTextNormal}>Hipotecaria</Text>
                <Text style={AlfaStyle.tableTextNormal}>12.4%</Text>
              </View>
            </View>
          </View>
          <View style={AlfaStyle.borderContainer}>
            <Border />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Alfa;
