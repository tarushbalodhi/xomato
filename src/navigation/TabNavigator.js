import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Quick from '../screens/quick';
import Delivery from '../screens/Delivery';
import Dining from '../screens/dining';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          elevation: 5,
          shadowOpacity: 0.1,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          paddingBottom: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Quick') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'Delivery') {
            iconName = focused ? 'bicycle' : 'bicycle-outline';
          } else if (route.name === 'Dining') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? '#ff4500' : 'gray'}
            />
          );
        },
      })}>
      <Tab.Screen name="Quick" component={Quick} />
      <Tab.Screen name="Delivery" component={Delivery} />
      <Tab.Screen name="Dining" component={Dining} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
