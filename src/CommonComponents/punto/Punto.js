import React from 'react';
import { View, Text, Image } from 'react-native';
// -----
import PuntoStyle from './PuntoStyle';

function Punto({ item }) {
    return (
        <View style={PuntoStyle.mainContainer}>
            <View style={PuntoStyle.puntoOneContainer}>
                <Image source={item.greenClickImage} />
                <Text style={PuntoStyle.puntoTextOne}>{item.puntoTitle}</Text>
            </View>
            <Text style={PuntoStyle.puntoTextOneDescription}>
                {item.puntoDescription}
            </Text>
        </View>
    );
}
export default Punto;
