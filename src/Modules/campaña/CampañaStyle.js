import { StyleSheet } from 'react-native';

const CampañaStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        // marginTop: 50,
    },
    addMargin: {
        marginHorizontal: 21,
    },
    resumenText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    resumenTextDescription1: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 15,
        textAlign: 'justify',

        marginVertical: 21,
    },
    resumenTextDescription2: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 15,
        textAlign: 'justify',
    },
    indicadoresBorderContainer: {
        marginTop: 20,
        marginBottom: 10,
    },
    indicadoresText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconTextValueAdjust: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // backgroundColor: 'gray',
        alignItems: 'center',
        marginTop: 20,
    },
    indicadoresImgDescriptionContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
    },
    financeIconsContainer: {},
    textAdjacentImg: {
        fontSize: 14,
        marginLeft: 10,
    },
    puntosBorderContainer: {
        marginTop: 34,
    },
    puntosText: {
        fontSize: 16,
        fontWeight: 'bold',

        marginTop: 20,
    },
    ubicaciónBorderContainer: {
        marginTop: 21,
    },
    ubicaciónText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 21,
    },
    mapImageContainer: {

        marginTop: 12,
        alignItems: 'center',
    },

    mapImg: {
    },
});

export default CampañaStyle;
