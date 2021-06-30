import 'react-native-gesture-handler';
import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// -----
import LoginDark from '../Modules/Auth/LoginDark/logingDark';
import Intro from '../Modules/Intro/intro';
import Login from '../Modules/login/Login';
import SignupOpenAccount from '../Modules/Auth/signupOpenAccount/SignupOpenAccount';
import SignupWithName from '../Modules/Auth/signupWithName/SignupWithName';
import Dashboard from '../Modules/dashboad/Dashboadr';
import Alfa from '../CommonComponents/alfa/Alfa';
import Campaña from '../Modules/campaña/Campaña';
import Garantía from '../Modules/garantía/Garantía';
import Detalles from '../Modules/detalles/Detalles';
import Rendimiento from '../Modules/rendimiento/Rendimiento';
import DrawerMenu from '../Modules/drawerMenu/DrawerMenu';
import Cuenta from '../Modules/cuenta/Cuenta';
import Ajustes from '../Modules/ajustes/Ajustes';
import Contacto from '../Modules/contacto/Contacto';

// -----
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomNav = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// _____________________________________

function Navigation() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginDark" component={LoginDark} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignupOpenAccount" component={SignupOpenAccount} />
      <Stack.Screen name="SignupWithName" component={SignupWithName} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      {/* ----------------- */}
      <Stack.Screen name="Alfa" component={MyTabs} />
      {/* ----------------- */}
      <Stack.Screen name="bottomNav" component={BottomTab} />

      {/* ----- */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
// _________________________________
// export default Navigation;

function MyTabs() {
  return (
    <ScrollView style={{flex: 1}}>
      <Alfa />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#0C1327',
          labelStyle: {fontSize: 12, fontWeight: 'bold'},
          style: {backgroundColor: '#fff'},
        }}>
        <Tab.Screen name="Campaña" component={Campaña} />
        <Tab.Screen name="Garantía" component={Garantía} />
        <Tab.Screen name="Detalles" component={Detalles} />
        <Tab.Screen name="Rendimiento" component={Rendimiento} />
      </Tab.Navigator>
    </ScrollView>
  );
}

// _____________________________________

function BottomTab() {
  return (
    <BottomNav.Navigator
      activeColor="red"
      inactiveColor="white"
      activeBackgroundColor="green"
      inactiveBackgroundColor="green"
      style={{backgroundColor: 'green'}}
      // style={backgroundColor: 'red'}}
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: 'blue',
        style: {backgroundColor: 'white'},
      }}>
      <BottomNav.Screen
        options={{
          tabBarIcon: props => (
            <Image
              style={{tintColor: props.color}}
              source={require('../Assets/icons/showChartIcon.png')}
            />
          ),
        }}
        name="Invertir"
        component={Dashboard}
      />
      <BottomNav.Screen
        options={{
          tabBarIcon: props => (
            <Image
              style={{tintColor: props.color}}
              source={require('../Assets/icons/cuentaIcon.png')}
            />
          ),
        }}
        name="Cuenta"
        component={Cuenta}
      />

      <BottomNav.Screen
        options={{
          tabBarIcon: props => (
            <Image
              style={{tintColor: props.color}}
              source={require('../Assets/icons/settingIcon.png')}
            />
          ),
        }}
        name="Ajustes"
        component={Ajustes}
      />
      <BottomNav.Screen
        options={{
          tabBarIcon: props => (
            <Image
              style={{tintColor: props.color}}
              source={require('../Assets/icons/contactoIcon.png')}
            />
          ),
        }}
        name="Contacto"
        component={Contacto}
      />
    </BottomNav.Navigator>
  );
}
// _____________________________________

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={({navigation}) => (
          <DrawerMenu navigation={navigation} />
        )}>
        <Drawer.Screen name="etrwwetW" component={Navigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
