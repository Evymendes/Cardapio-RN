import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator} from 'react-navigation';

import HomeScreen from './source/screen/homeScreen';
import ContatoScreen from './source/screen/contatoScreen';
import HorariosScreen from './source/screen/horariosScreen';
import SobreScreen from './source/screen/sobreScreen';

const Navegador = TabNavigator({
  Home:{
    screen: HomeScreen
  },
  ContatoScreen:{
    screen: ContatoScreen
  },
  HorariosScreen:{
    screen: HorariosScreen
  },
  SobreScreen:{
    screen: SobreScreen
  }

}, {
  tabBarPosition:'bottom',
  tabBarOptions:{
    showIcon:true
  }
});
export default Navegador;


// }, {
//   tabBarPosition:'botton',
//   tabBarOptions:{
//     showIcon:true
//   }

// { tabBarOptions: {
//      showIcon:true 
//     } 
//   }