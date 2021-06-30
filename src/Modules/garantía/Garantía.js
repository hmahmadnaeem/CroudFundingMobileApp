import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

// -----
import GarantíaStyle from './GarantíaStyle';

function Garantía() {
  return (
    <ScrollView style={GarantíaStyle.mainContainer}>
      <View style={GarantíaStyle.adjustMargin}>
        <Text style={GarantíaStyle.garantíaText}>Garantía</Text>
        <Text style={GarantíaStyle.tipoText}>
          Tipo de garantía: Hipotecaria
        </Text>
        <Text style={GarantíaStyle.tipoDescriptionOne}>
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

        <Text style={GarantíaStyle.tipoDescriptionTwo}>
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
      </View>

      <Image
        style={GarantíaStyle.penPaperImg}
        source={require('../../Assets/images/penPaper.png')}
      />
    </ScrollView>
  );
}
export default Garantía;
