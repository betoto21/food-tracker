import React from 'react';
import { HomeOptionComponent } from '../components/HomeOptionComponent';
import { FoodScreen } from './FoodScreen';
import { HistoryScreen } from './HistoryScreen';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

export const HomeScreen = () => {
  const theme = useTheme();
  const menu = [
    {
      title: 'Consultar Comidas',
      description: 'Consultar todas las comidas',
      component: FoodScreen,
      url: 'foods',
    },
    {
      title: 'Consultar Historial',
      description: 'Consultar el historial de la comida consumida',
      component: HistoryScreen,
      url: 'history',
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {menu.map(element => {
        return (
          <HomeOptionComponent
            title={element.title}
            description={element.description}
            component={element.component}
            url={element.url}
          />
        );
      })}
    </View>
  );
};
