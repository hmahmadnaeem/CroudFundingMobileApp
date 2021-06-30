import {
    StyleSheet
} from "react-native";

const CuentaStyle = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        // backgroundColor: '#00ced1',
    },
    borderView: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginHorizontal: 20,
        marginTop: 23,

    },
    contentView: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '55%',

        marginTop: 10,

    },
    addBorder: {
        borderBottomWidth: 4,
    },
    resumenText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,


    },
    transaccionesText: {
        // paddingLeft:20
    },




    headera: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginBottom: 30,
    },
    header: {
        fontSize: 36,
        alignSelf: 'auto',
        color: 'red',

    },
    portfolueContainer: {
        alignSelf: 'center',
        


    },

    valorText: {
        marginTop: 29,
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    mainPrice: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#227BFF',
        textAlign: 'center',
        marginTop: 5,
    },
    divideValueContainer: {
        marginTop: 17,

        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '40%',


    },
    leftValueContainer: {
// justifyContent:'center'

    },
    convertToRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    halfValue:{
        fontSize:14,
        fontWeight:'bold',
        color:'#227bff',
        textAlign:'center',
    },
    priceDescriptionOne:{
        textAlign:'center',
        fontSize:8,
    },
    rightValueContainer: {},
    portafolioTextContainer:{
        marginTop:41,
        borderTopWidth:1,
        borderTopColor:'black',
       
        marginHorizontal:20,
    },
    portafolioText:{
        fontSize:14,
        fontWeight:'bold',
        marginTop:20,
    },
    borderContainer:{
        marginTop:8,
    },


    

})
export default CuentaStyle;