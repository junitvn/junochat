import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, User, Chat, Profile } from '_scenes';
import { Colors } from '_styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TabNavigation = () => {
  return <Tab.Navigator tabBarOptions={{
    activeTintColor: '#e91e63',
    showLabel: false,
  }}>
    <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-heart" color={color} size={32} />
        ),
      }} />
    <Tab.Screen name="Chat" component={Chat}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles" color={color} size={29} />
        ),
      }} />
    <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={29} />
        ),
      }} />
  </Tab.Navigator>
}

export default Root;
