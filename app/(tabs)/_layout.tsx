import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
       
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 15,
          height: Platform.OS === 'ios' ? 65 : 60,
          paddingBottom: Platform.OS === 'ios' ? 15 : 10,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name='home-outline' size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='products'
        options={{
          title: 'Products',
          tabBarIcon: ({ color }) => (
            <Ionicons name='pricetags-outline' size={24} color={color} />
          )
        }}
      />
            <Tabs.Screen
        name='chatBot'
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="robot" size={24} color={color} />
          )
        }}
      />
      {/* <Tabs.Screen
        name='notifications'
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => (
            <Ionicons name='notifications-outline' size={24} color={color} />
          )
        }}
      /> */}

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name='person-outline' size={24} color={color} />
          )
        }}
      />
      {/* <Tabs.Screen
        name='About'
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons name='information-circle-outline' size={24} color={color} />
          )
        }}
      /> */}
    </Tabs>
  );
}
