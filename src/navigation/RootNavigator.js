import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useTranslation } from 'react-i18next';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'md-settings' : 'md-settings-outline';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'md-cog' : 'md-cog-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{ tabBarLabel: t('navigate:home') }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{ tabBarLabel: t('navigate:settings') }}
        />
         <Tab.Screen
          name='Profile'
          component={Profile}
          options={{ tabBarLabel: t('navigate:profile') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}