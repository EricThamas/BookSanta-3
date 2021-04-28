import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import WelcomeScreen from "./Screens/WelcomeScreen"
import {AppTabNavigator} from "./Components/AppTabNavigator"
import{createAppContainer,createSwitchNavigator}from "react-navigation"
import { createBottomTabNavigator } from 'react-navigation-tabs';



export default class BookSanta extends React.Component{
  render(){
    return(
   <AppContainer/>
  )}
}
const SwitchNavigator=createSwitchNavigator({
  //Welcome:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer= createAppContainer(SwitchNavigator)