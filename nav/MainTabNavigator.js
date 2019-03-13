import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SensorScreen from '../screens/SensorScreen';

const HomeTab = createStackNavigator({ screen: HomeScreen });

const SensorTab = createStackNavigator({ screen: SensorScreen });

export default createBottomTabNavigator({
  HomeTab,
  SensorTab
});
