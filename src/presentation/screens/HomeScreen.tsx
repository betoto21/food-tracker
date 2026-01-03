import React from 'react';
import { HomeOptionComponent } from '../components/HomeOptionComponent';
import { FoodScreen } from './FoodScreen';
import { HistoryScreen } from './HistoryScreen';

export const HomeScreen = () => {
  const menu = [
    {
      title: 'Registrar Comida',
      description: 'Registrar la comida consumida',
      component: FoodScreen,
      url: 'foods',
    },
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
    <>
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
    </>
  );
};
