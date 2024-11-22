import React from 'react';
import { Image, Platform } from 'react-native';
import { Tabs } from 'expo-router';

import CustomTabBarButton from '@/components/CustomTabBarButton'; // Adjust the path as necessary
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: CustomTabBarButton,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/images/home.png')}
              style={{ width: 24, height: 24, tintColor: color, marginTop: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/images/message.png')}
              style={{ width: 24, height: 24, tintColor: color, marginTop: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/images/calendar.png')}
              style={{ width: 24, height: 24, tintColor: color, marginTop: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('@/assets/images/user.png')}
              style={{ width: 24, height: 24, tintColor: color, marginTop: 10 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
