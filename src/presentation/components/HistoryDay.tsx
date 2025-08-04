import React from 'react'
import { HistoryDayCardComponent } from './HistoryDayCardComponent';
import { HistoryInfo } from '../../domain/models/HistoryInfo';
import { ScrollView, View } from 'react-native';


export const HistoryDay = ( { breakfast, lunch, dinner} : HistoryInfo ) => {
  return (
    <ScrollView style={{ maxHeight: 666 }}>
      <HistoryDayCardComponent
        foodType={'Desayuno'}
        tittle={breakfast.name}
        description={breakfast.description}
      />
      <HistoryDayCardComponent
        foodType={'Comida'}
        tittle={lunch.name}
        description={lunch.description}
      />
      <HistoryDayCardComponent
        foodType={'Cena'}
        tittle={dinner.name}
        description={dinner.description}
      />
    </ScrollView>
  );
}
