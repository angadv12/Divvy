import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';

// Import screens
import HomeScreen from '@/app/(tabs)/index';
import CameraScreen from '@/app/(tabs)/camera';
import ProfileScreen from '@/app/(tabs)/profile';

// Create the top tab navigator
const Tab = createMaterialTopTabNavigator();

// Function to render tab bar icons
function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialIcons>['name']; color: string }) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tab.Navigator
      tabBarPosition='bottom'
      screenOptions={{
        swipeEnabled: true, // Enable swipe gestures
        tabBarShowLabel: true, // Show tab labels
        tabBarIndicatorStyle: { backgroundColor: 'blue' }, // Customize indicator color
        tabBarStyle: { backgroundColor: 'white' }, // Customize tab background
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-filled" color={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="camera-alt" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
