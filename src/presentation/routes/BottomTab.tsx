import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, BottomNavigation, useTheme } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { FoodScreen } from '../screens/FoodScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        header: ({ navigation, route, options }) => {
          return (
            <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
              <Appbar.Content
                title={options.title || route.name}
                color={theme.colors.onPrimary}
              />
            </Appbar.Header>
          );
        },
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          activeColor={theme.colors.primary}
          onTabPress={({ route, focused }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }
            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            return options.title !== undefined ? options.title : route.name;
          }}
        />
      )}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialDesignIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="foods"
        component={FoodScreen}
        options={{
          title: 'Comidas',
          tabBarIcon: ({ color }) => (
            <MaterialDesignIcons
              name="silverware-fork-knife"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HistoryScreen}
        options={{
          title: 'Historial',
          tabBarIcon: ({ color }) => (
            <MaterialDesignIcons name="history" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
