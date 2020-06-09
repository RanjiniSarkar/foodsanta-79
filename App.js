import React,{Component} from 'react';
import {View,Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import FoodAnimation from './components/Food'



export default class App extends React.Component{
  render(){
    return(
      <WelcomeScreen/>
    )
  }


}