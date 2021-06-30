// import React from 'react';
// import {View} from 'react-native';
// // -------------------
// import LoginDarkFun from './src/Modules/Auth/LoginDark/logingDark';
// import IntroFun from './src/Modules/Intro/intro';
// import Login from './src/Modules/login/Login';
// import SignupOpenAccount from './src/Modules/Auth/signupOpenAccount/SignupOpenAccount';
// import SignupWithName from './src/Modules/Auth/signupWithName/SignupWithName';
// import Dashboard from './src/Modules/dashboad/Dashboadr';
// import Cuenta from './src/Modules/cuenta/Cuenta';
// import Ajustes from './src/Modules/ajustes/Ajustes';
// import Contacto from './src/Modules/contacto/Contacto';
import DrawerMenu from './src/Modules/drawerMenu/DrawerMenu';

// // ----------------------------

// import ButtonFun from './src/CommonComponents/Button/button';
// import AuthHeader from './src/CommonComponents/authHeader/AuthHeader';
// import InputField from './src/CommonComponents/inputField/InputField';
// import DashboardCard from './src/CommonComponents/dashboardCard/DashboardCard';
// import MenuTop from './src/CommonComponents/menuTop/MenuTop';
// import Border from './src/CommonComponents/border/Border';
// import PortfolioCard from './src/CommonComponents/portfolioCard/PortfolioCard';
// import ProfileInfo from './src/CommonComponents/profileInfo/ProfileInfo';
// import Alfa from './src/CommonComponents/alfa/Alfa';
// import Campaña from './src/Modules/campaña/Campaña';
// import Punto from './src/CommonComponents/punto/Punto';
// import Garantía from './src/Modules/garantía/Garantía';
// import Detalles from './src/Modules/detalles/Detalles';
// import DeudaSenior from './src/CommonComponents/deudaSenior/DeudaSenior';
// import TextSpaceBetween from './src/CommonComponents/textSpaceBetween/TextSpaceBetween';
// import Rendimiento from './src/Modules/rendimiento/Rendimiento';
// import BlueSlider from './src/CommonComponents/blueSlider/BlueSlider';
import MenuTextContainer from './src/CommonComponents/menuTextContainer/MenuTextContainer';

// // ----------------------------

// function App() {
//   return (
//     <View style={{flex: 1, backgroundColor: 'darkgray'}}>
//       {/* <LoginDarkFun /> */}
//       {/* <IntroFun /> */}
//       {/* <Login /> */}
//       {/* <SignupOpenAccount /> */}
//       {/* <SignupWithName /> */}
//       {/* <Dashboard/> */}
//       {/* <Cuenta/> */}
//       {/* <Ajustes /> */}
//       {/* <Contacto /> */}

//       {/* ------------ */}
//       {/* <AuthHeader /> */}
//       {/* <InputField /> */}
//       {/* <DashboardCard/> */}
//       {/* <MenuTop/> */}
//       {/* <Border/> */}
//       {/* <PortfolioCard/> */}
//       {/* <ProfileInfo /> */}
// <Alfa />;
//       {/* <Campaña /> */}
//       {/* <Punto /> */}
//       {/* <Garantía /> */}
//       {/* <Detalles /> */}
//       {/* <DeudaSenior /> */}
//       {/* <TextSpaceBetween /> */}
//       {/* <Rendimiento /> */}
//       {/* <BlueSlider /> */}
//     </View>
//   );
// }
// export default App;

//___________________________________
import React from 'react';
import {View} from 'react-native';
import Navigation from './src/navigation/Navigation';
import AlfaStyle from './src/CommonComponents/alfa/AlfaStyle';
export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <MenuTextContainer /> */}
      {/* <DrawerMenu /> */}
      <Navigation />
    </View>
  );
}
