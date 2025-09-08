import React from 'react'
import { HistoryDayCardComponent } from './HistoryDayCardComponent';
import { Dimensions, ScrollView } from 'react-native';
import { FoodModel } from '../../domain/models/FoodModel';

interface HistoryDayProps {
  breakfast: FoodModel;
  lunch: FoodModel;
  dinner: FoodModel;
}

export const HistoryDay = ( { breakfast, lunch, dinner} : HistoryDayProps) => {
  const { height } = Dimensions.get('window');
  return (
    <ScrollView style={{ maxHeight: height * 0.680 }}>
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
