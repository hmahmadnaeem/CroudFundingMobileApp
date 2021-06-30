import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
// -----
import DashboardStyle from './DashboadrStyle';
import DashboardCard from '../../CommonComponents/dashboardCard/DashboardCard';
import MenuTop from '../../CommonComponents/menuTop/MenuTop';

function Dashboard({navigation}) {
  return (
    <ScrollView style={DashboardStyle.ScrollViewContainer}>
      <MenuTop
        headerIcon={require('../../Assets/icons/menuIcon.png')}
        text="Invertir"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Alfa')}>
        <Text style={DashboardStyle.OportunityText}>
          Oportunidades de Inversión
        </Text>
      </TouchableOpacity>
      <DashboardCard getImage={require('../../Assets/images/house.png')} />

      <DashboardCard
        getImage={require('../../Assets/images/buildingCrop.png')}
      />

      {/*  */}
    </ScrollView>
  );
}
export default Dashboard;

// -----
// {/* <View style={{margin:20}}>
// <View style={DashboardStyle.houseMainContainer}>
//     <Text style={DashboardStyle.DesarrolloText}>Desarrollo Alfa</Text>
//     {/*  */}
//     <View style={DashboardStyle.textRowAdjust}>
//         <Text style={DashboardStyle.porText}>Por Desarrollador 1</Text>
//         <Text style={DashboardStyle.quedanText}>Quedan 39 días</Text>
//     </View>
//     <Text style={DashboardStyle.deudaText}>
//     Deuda
//     </Text>
//     <Image style={DashboardStyle.houseImg} source={require('../../Assets/images/house.png')}/>
//    <View style={DashboardStyle.grayLineContainer}>
//        <Text style={DashboardStyle.percentageText}>40%</Text>
//    </View>
//    <View style={DashboardStyle.priceTextContainer}>
//     <Text style={{fontSize:10, width:120, textAlign:'left'}}>$1.5MM recaudado</Text>
//    <Text style={{fontSize:10, width:120, textAlign:'left'}}>Min $4.5MM</Text>
//    <Text style={{fontSize:10, width:120, textAlign:'left'}}>Max $4.5MM</Text>
//    </View>
//    {/*  */}

//    <View style={DashboardStyle.valueDescriptionContainer}>
//    <View style={DashboardStyle.descriptionContainer}>
//    <Text style={DashboardStyle.descriptionText, DashboardStyle.adjustText}>Tasa anual fija</Text>
//    <Text style={DashboardStyle.descriptionText, DashboardStyle.adjustText}>Mín de inversión</Text>
//    <Text style={DashboardStyle.descriptionText, DashboardStyle.adjustText}>Plazo</Text>
//    </View>
//    <View style={DashboardStyle.priceContainer}>
//    <Text style={DashboardStyle.finalValue, DashboardStyle.adjustText}>12.32%</Text>
//    <Text style={DashboardStyle.finalValue, DashboardStyle.adjustText}>$54,000 MXN</Text>
//    <Text style={DashboardStyle.finalValue, DashboardStyle.adjustText}>12 meses</Text>
//    </View>
//    </View>
//    {/* End external view */}

// </View>
// </View> */}

// ------------------

// <View style={DashboardStyle.iconTextContainer}>
// <Image style={DashboardStyle.menuIconContainer} source={require('../../Assets/icons/manueIcon.png')}
// />
// <View style={DashboardStyle.invertTextContainer}>
// <Text style={DashboardStyle.invertText}>Invertir</Text>
// </View>
// </View>
