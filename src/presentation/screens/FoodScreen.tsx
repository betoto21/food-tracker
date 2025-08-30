import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FoodModel } from '../../domain/models/FoodModel';
import { GetFoodsUseCase } from '../../domain/use-cases/GetFoodsUseCase';
import { FAB, useTheme } from 'react-native-paper';
import { FoodDialog } from '../components/FoodDialog';
import { StyleSheet } from 'react-native';
import { FoodListComponent } from '../components/FoodListComponent';

const Tab = createMaterialTopTabNavigator();

export const FoodScreen = () => {
  const [breackfasts, setbreackfasts] = useState<FoodModel[]>([]);
  const [lunch, setLunch] = useState<FoodModel[]>([]);
  const [dinner, setDinner] = useState<FoodModel[]>([]);
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.primaryContainer,
      width: 420,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
    },
    floatinButton: {
      position: 'absolute',
      margin: 16,
      right: 6,
      bottom: 6,
      backgroundColor: theme.colors.onPrimaryContainer,
    },
  });
  const getFoods = async () => {
    const allMealLists = GetFoodsUseCase();
    setbreackfasts(allMealLists[0]);
    setLunch(allMealLists[1]);
    setDinner(allMealLists[2]);
  };
  useEffect(() => {
    getFoods();
  }, []);

  const showDialog = () => {
    setVisible(true);
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIndicatorStyle: { backgroundColor: theme.colors.primary },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderBottomColor: theme.colors.primaryContainer,
            borderBottomWidth: 1,
          },
        }}
      >
        <Tab.Screen name="Desayunos">
          {() => <FoodListComponent foods={breackfasts} />}
        </Tab.Screen>
        <Tab.Screen name="Comidas">
          {() => <FoodListComponent foods={lunch} />}
        </Tab.Screen>
        <Tab.Screen name="Cenas">
          {() => <FoodListComponent foods={dinner} />}
        </Tab.Screen>
      </Tab.Navigator>
      <FAB
        icon="plus"
        style={styles.floatinButton}
        color={theme.colors.onPrimary}
        onPress={showDialog}
      />

      <FoodDialog setVisible={setVisible} visible={visible} isEditing={false} />
    </>
  );
};
