import React, { useEffect, useState } from 'react'
import { FoodCardComponent } from '../components/FoodCardComponent'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { globalColors, globalStyles } from '../theme/theme';
import { FoodModel } from '../../domain/models/FoodModel';
import { GetFoodsUseCase } from '../../domain/use-cases/GetFoodsUseCase';
import { FAB } from 'react-native-paper';
import { FoodDialog } from '../components/FoodDialog';

const Tab = createMaterialTopTabNavigator();


export const FoodScreen = () => {
  const [breackfasts, setbreackfasts] = useState<FoodModel[]>([]);
  const [lunch, setLunch] = useState<FoodModel[]>([]);
  const [dinner, setDinner] = useState<FoodModel[]>([]);
  const [visible, setVisible] = useState(false);
  
  const getFoods = async () => {
    const allMealLists = GetFoodsUseCase();
    setbreackfasts(allMealLists[0]);
    setLunch(allMealLists[1]);
    setDinner(allMealLists[2]);
  }
  useEffect(() => {
    getFoods();
  }, []);
  
  const showDialog = () => {
    setVisible(true);
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIndicatorStyle: { backgroundColor: globalColors.primary },
          tabBarActiveTintColor: globalColors.primary,
        }}
      >
        <Tab.Screen name="Desayunos">
          {() =>
            breackfasts.map(food => (
              <FoodCardComponent
                id={food.id}
                title={food.name}
                description={food.description}
                type={food.type}
              />
            ))
          }
        </Tab.Screen>
        <Tab.Screen name="Comidas">
         {() =>
            lunch.map(food => (
              <FoodCardComponent
                id={food.id}
                title={food.name}
                description={food.description}
                type={food.type}
              />
            ))
          }
        </Tab.Screen>
        <Tab.Screen name="Cenas">
         {() =>
            dinner.map(food => (
              <FoodCardComponent
                id={food.id}
                title={food.name}
                description={food.description}
                type={food.type}
              />
            ))
          }
        </Tab.Screen>
      </Tab.Navigator>
      <FAB
          icon='plus'
          style={globalStyles.floatinButton}
          color={globalColors.surface_container_low}
          onPress={showDialog}
        />
        <FoodDialog setVisible={setVisible}  visible= {visible} isEditing={false}/>
    </>
  );
}
