import React,{Component} from 'react';
import {View,Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import FoodAnimation from './components/Food'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import{AppTabNavigator} from './components/AppTabNavigator';
import DonateScreen from './screens/DonateScreen';
import {AppTabNavigator1} from './components/AppTabNavigator1';




export default function App (){

    return(

      <AppContainer/>
      
     
      
    )
    
  }

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator},
  
})


const AppContainer = createAppContainer(switchNavigator)

