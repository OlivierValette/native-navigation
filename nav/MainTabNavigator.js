import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import Colors from '../colors/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SensorScreen from '../screens/SensorScreen';
import OdoricoScreen from '../screens/OdoricoScreen';

const tabBarDefaultOptions = {
    activeTintColor: 'white',
    activeBackgroundColor: Colors.primary,
    inactiveTintColor: Colors.secondary,
    inactiveBackgroundColor: 'white',
    labelStyle: {
        fontSize: 14,
    },
};

const HomeTab = createStackNavigator({ screen: HomeScreen });
HomeTab.navigationOptions = {
    title: 'Home',
    tabBarIcon: ( {tintColor} ) => (
        <TabBarIcon
            name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home' }
            color={tintColor}
        />
    ),
    tabBarOptions: tabBarDefaultOptions,
};

const OdoricoTab = createStackNavigator({ screen: OdoricoScreen });
OdoricoTab.navigationOptions = {
    title: 'Odorico',
    tabBarIcon: ( {tintColor} ) => (
        <TabBarIcon
            name={ Platform.OS === 'ios' ? 'ios-keypad' : 'md-keypad' }
            color={tintColor}
        />
    ),
    tabBarOptions: tabBarDefaultOptions,
};

const SensorTab = createStackNavigator({ screen: SensorScreen });
SensorTab.navigationOptions = {
    title: 'Sensors',
    tabBarIcon: ( {tintColor} ) => (
        <TabBarIcon
            name={ Platform.OS === 'ios' ? 'ios-nuclear' : 'md-nuclear' }
            color={tintColor}
        />
    ),
    tabBarOptions: tabBarDefaultOptions,
};

export default createBottomTabNavigator({
    HomeTab,
    OdoricoTab,
    SensorTab
});
