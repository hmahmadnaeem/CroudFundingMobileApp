import {
    StyleSheet
} from "react-native";

const PortfolioCardStyle = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor:'white',
    },
    imageContainer: {
        // backgroundColor: 'red',
        width: '20%',
    },
    colOneContainer: {
        // backgroundColor: 'lime',
        width: '20%',
        marginLeft:10,
    },
   
    colTwoContainer: {
        // backgroundColor: 'red',
        width: '20%',
        marginLeft:2,
        
    },
    colThreeContainer: {
        // backgroundColor: 'pink',
        width: '20%',
        marginLeft:2,
    },
    colFourContainer: {
        // backgroundColor: 'lime',
        width: '20%',
        marginLeft:2,
    },
    // Defining Text styling
    Col1Heading:{
        fontSize:12,
        fontWeight:'bold',
        marginBottom:3,
    },

     firstRowText:{
     fontSize:8,
 },

  secondRowText:{
     fontSize:12,
 },

  thirdRowText:{
     fontSize:8,
 },

  fourthRowText:{
     fontSize:12,
 },
})
export default PortfolioCardStyle;

// // 

// mainContainer:{
//     marginTop:100,
//     marginBottom:10,
//     flexDirection:'row',
//  alignSelf:'center',
//  justifyContent:'space-between',
//  backgroundColor:'white',
//  width:'100%',

//  },
//  mainTextContainer:{
//      flexDirection:'column',
//      marginLeft:5,
//  },
//  portfolioCardHeading:{
//      fontSize:12,
//      fontWeight:'bold',
//  },
//  row1:{
//      marginTop:4,
//      flexDirection:'row',
//      backgroundColor:'green',
//      paddingRight:20,

//       width:'80%',
// // 

//  },
//  firstRowText:{
//      fontSize:8,
//      // width:'25%',
//      backgroundColor:'blue',

//  },
//  row2:{
//      flexDirection:'row',
//      // width:'20%',
//      // 

//  },
//  secondRowText:{
//      fontSize:12,
//      // width:'25%',
//  },
//  row3:{
//      marginTop:7,
//      flexDirection:'row',
//      // width:'20%',
//      // 

//  },
//  thirdRowText:{
//      fontSize:8,
//      // width:'25%',
//  },
//  row4:{
//      flexDirection:'row',

//      // width:'20%',
//      // 

//  },

//  fourthRowText:{
//      fontSize:12,
//  },