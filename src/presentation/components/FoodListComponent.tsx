import { FlatList, StyleSheet, View } from "react-native";
import { FoodCardComponent } from "./FoodCardComponent";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { FoodModel } from "../../domain/models/FoodModel";
import { NoFoodComponent } from "./NoFoodComponent";
import { useCallback, useEffect, useState } from "react";
import { GetFoodsUseCase } from "../../domain/use-cases/GetFoodsUseCase";

interface FoodListComponentProps {
  foodType: number;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}
export const FoodListComponent = ({foodType, refresh, setRefresh} : FoodListComponentProps) => {
  const theme = useTheme();
  const [foods, setFoods] = useState<FoodModel[]>([]);
  const [loading, setLoading] = useState(true)
 
  const getFoods = useCallback(async () => {
    try {
      setLoading(true);
      const foodList = await GetFoodsUseCase(foodType);
      setFoods(foodList);
    } catch (error) {
      console.error("Failed to fetch foods:", error);
    } finally {
      setLoading(false);
    }
  }, [foodType]);

  useEffect(() => {
    setLoading(true)
    getFoods();
    setLoading(false)
    setRefresh(false);
  }, [getFoods, refresh, setRefresh])
  const styles = StyleSheet.create({
    activityIndicator: {
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
  return (
    <View style={{ flex: 1,  backgroundColor: theme.colors.background}}>
      {loading ? (
        <ActivityIndicator
            animating={true}
            color={theme.colors.primary}
            size={'large'}
            style={styles.activityIndicator}
          />
      ) : 
        foods.length > 0 ?
          (<FlatList
            data={foods}
            renderItem={({ item }) => (
              <FoodCardComponent
                id={item.id}
                title={item.name}
                description={item.description}
                type={item.type}
              />
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              flex: 1,
              backgroundColor: theme.colors.background,
            }}
          />) : (
            <NoFoodComponent />
          )
      }
    </View>
  );
};