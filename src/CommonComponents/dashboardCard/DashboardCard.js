import React from 'react';
import {View, Text, Image} from 'react-native';
// -----
import DashboardCardStyle from './DashboardCardStyle';

function DashboardCard(props) {
  return (
    <View style={{marginHorizontal: 20, marginTop: 10}}>
      <View style={DashboardCardStyle.houseMainContainer}>
        <Text style={DashboardCardStyle.DesarrolloText}>Desarrollo Alfa</Text>
        {/*  */}
        <View style={DashboardCardStyle.textRowAdjust}>
          <Text style={DashboardCardStyle.porText}>Por Desarrollador 1</Text>
          <Text style={DashboardCardStyle.quedanText}>Quedan 39 días</Text>
        </View>
        <Text style={DashboardCardStyle.deudaText}>Deuda</Text>
        <Image style={DashboardCardStyle.houseImg} source={props.getImage} />
        <View style={DashboardCardStyle.grayLineContainer}>
          <Text style={DashboardCardStyle.percentageText}>40%</Text>
        </View>
        <View style={DashboardCardStyle.priceTextContainer}>
          <Text style={{fontSize: 10, width: 120, textAlign: 'left'}}>
            $1.5MM recaudado
          </Text>
          <Text style={{fontSize: 10, width: 120, textAlign: 'left'}}>
            Min $4.5MM
          </Text>
          <Text style={{fontSize: 10, width: 120, textAlign: 'left'}}>
            Max $4.5MM
          </Text>
        </View>
        {/*  */}

        <View style={DashboardCardStyle.valueDescriptionContainer}>
          <View style={DashboardCardStyle.descriptionContainer}>
            <Text
              style={
                (DashboardCardStyle.descriptionText,
                DashboardCardStyle.adjustText)
              }>
              Tasa anual fija
            </Text>
            <Text
              style={
                (DashboardCardStyle.descriptionText,
                DashboardCardStyle.adjustText)
              }>
              Mín de inversión
            </Text>
            <Text
              style={
                (DashboardCardStyle.descriptionText,
                DashboardCardStyle.adjustText)
              }>
              Plazo
            </Text>
          </View>
          <View style={DashboardCardStyle.priceContainer}>
            <Text
              style={
                (DashboardCardStyle.finalValue, DashboardCardStyle.adjustText)
              }>
              12.32%
            </Text>
            <Text
              style={
                (DashboardCardStyle.finalValue, DashboardCardStyle.adjustText)
              }>
              $54,000 MXN
            </Text>
            <Text
              style={
                (DashboardCardStyle.finalValue, DashboardCardStyle.adjustText)
              }>
              12 meses
            </Text>
          </View>
        </View>
        {/* End external view */}
      </View>
    </View>
  );
}
export default DashboardCard;
