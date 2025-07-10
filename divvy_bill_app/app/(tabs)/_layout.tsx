import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

// Import screens
import HomeScreen from '@/app/(tabs)/index';
import CameraScreen from '@/app/(tabs)/camera';
import ProfileScreen from '@/app/(tabs)/profile';
import OpenaiTestScreen from '@/app/(tabs)/openai_test';

// Create the top tab navigator
const Tab = createMaterialTopTabNavigator();

// Function to render tab bar icons
function TabBarIcon(props: { name: React.ComponentProps<typeof MaterialIcons>['name']; color: string }) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useColorScheme();

  return (
    <Tab.Navigator
      tabBarPosition='bottom'
      screenOptions={{
        swipeEnabled: true, // Enable swipe gestures
        tabBarShowLabel: false, // Show tab labels
        tabBarIndicatorStyle: { backgroundColor: 'transparent' }, // Customize indicator color
        tabBarStyle: { backgroundColor: Colors[theme ?? 'light'].background, paddingBottom: 30 }, // Customize tab background
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-filled" color={color} />,
        }}
      />
      <Tab.Screen
        name="camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="camera-alt" color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
      <Tab.Screen
        name="openai_test"
        component={OpenaiTestScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="psychology" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
