import React from 'react';
import {View, Image, Text} from 'react-native';
// -----
import PortfolioCardStyle from './PortfolioCardStyle';

function PortfolioCard(params) {
  return (
   <View style={PortfolioCardStyle.mainContainer} >
     <View style={PortfolioCardStyle.imageContainer}><Image source={require('../../Assets/images/houseSmall.png')} /></View>
     <View style={PortfolioCardStyle.colOneContainer}>
       <Text  style={PortfolioCardStyle.Col1Heading}>Desarollo 1</Text>
     <Text style={[PortfolioCardStyle.firstRowText]}>Tasa Anual</Text>
      <Text style={PortfolioCardStyle.secondRowText}>15%</Text>
       <Text style={PortfolioCardStyle.thirdRowText}>Plazo</Text>
       <Text style={PortfolioCardStyle.fourthRowText}>24 meses</Text>
     </View>
     {/*  */}
     <View style={PortfolioCardStyle.colTwoContainer}>
     <Text></Text>
     <Text style={[PortfolioCardStyle.firstRowText]}>Pagos recibidos</Text>
      <Text style={PortfolioCardStyle.secondRowText}>$54,000</Text>
       <Text style={PortfolioCardStyle.thirdRowText}>Pagos pendient</Text>
       <Text style={PortfolioCardStyle.fourthRowText}>$54,000</Text>
     </View>
     {/*  */}
     <View style={PortfolioCardStyle.colThreeContainer}>
     <Text></Text>
     <Text style={[PortfolioCardStyle.firstRowText]}>Fecha inicio</Text>
      <Text style={PortfolioCardStyle.secondRowText}>01/11/20</Text>
       <Text style={PortfolioCardStyle.thirdRowText}>Fecha termino</Text>
       <Text style={PortfolioCardStyle.fourthRowText}>01/11/21</Text>
     </View>
     {/*  */}
     <View style={PortfolioCardStyle.colFourContainer}>
     <Text></Text>
     <Text style={[PortfolioCardStyle.firstRowText]}>Estado</Text>
      <Text style={PortfolioCardStyle.secondRowText}>Activo</Text>
       <Text style={PortfolioCardStyle.thirdRowText}></Text>
       <Text style={PortfolioCardStyle.fourthRowText}></Text>
     </View>
   </View>
  )
}
export default PortfolioCard;
// ---


// <View style={{width: '100%'}}>
// <View style={PortfolioCardStyle.mainContainer}>
//   <View style={{width: '20%', backgroundColor: 'red'}}>
//     <Image source={require('../../Assets/images/houseSmall.png')} />
//   </View>
//   <View style={PortfolioCardStyle.mainTextContainer}>
//     {/* <Text style={PortfolioCardStyle.portfolioCardHeading}>Desarollo 1</Text> */}
//     <View style={PortfolioCardStyle.row1}>
//       <Text style={[PortfolioCardStyle.firstRowText]}>Tasa Anual</Text>
//       <Text style={PortfolioCardStyle.firstRowText}>Pagos recibidos</Text>
//       <Text style={PortfolioCardStyle.firstRowText}>Fecha inicio</Text>
//       <Text style={[PortfolioCardStyle.firstRowText, {marginRight: 0}]}>
//         Estado
//       </Text>
//     </View>

//     <View style={PortfolioCardStyle.row2}>
//       <Text style={PortfolioCardStyle.secondRowText}>15%</Text>
//       <Text style={PortfolioCardStyle.secondRowText}>$54,000</Text>
//       <Text style={PortfolioCardStyle.secondRowText}>01/11/20</Text>
//       <Text
//         style={[PortfolioCardStyle.secondRowText, {color: '#227BFF'}]}>
//         Activo
//       </Text>
//     </View>
//     <View style={PortfolioCardStyle.row3}>
//       <Text style={PortfolioCardStyle.thirdRowText}>Plazo</Text>
//       <Text style={PortfolioCardStyle.thirdRowText}>
//         Pagos pendientes
//       </Text>
//       <Text style={PortfolioCardStyle.thirdRowText}>Fecha termino</Text>
//     </View>
//     <View style={PortfolioCardStyle.row4}>
//       <Text style={PortfolioCardStyle.fourthRowText}>24 meses</Text>
//       <Text style={PortfolioCardStyle.fourthRowText}>$54,000</Text>
//       <Text style={PortfolioCardStyle.fourthRowText}>01/11/20</Text>
//     </View>
//   </View>
// </View>
// </View>