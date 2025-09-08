import React from 'react'
import { HistoryDayCardComponent } from './HistoryDayCardComponent';
import { Dimensions, RefreshControl, ScrollView } from 'react-native';
import { FoodModel } from '../../domain/models/FoodModel';
import { useTheme } from 'react-native-paper';

interface HistoryDayProps {
  breakfast: FoodModel;
  lunch: FoodModel;
  dinner: FoodModel;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export const HistoryDay = ( { breakfast, lunch, dinner,refresh, setRefresh} : HistoryDayProps) => {
  const { height } = Dimensions.get('window');
  const theme = useTheme();
  return (
    <ScrollView style={{ maxHeight: height * 0.680 }}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => setRefresh(true)}
          colors={[theme.colors.primary]}
          tintColor={theme.colors.primary}
        />
      }>
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
