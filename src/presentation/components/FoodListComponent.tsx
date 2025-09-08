import { FlatList, RefreshControl, ScrollView, StyleSheet} from "react-native";
import { FoodCardComponent } from "./FoodCardComponent";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { FoodModel } from "../../domain/models/FoodModel";
import { NoFoodComponent } from "./NoFoodComponent";
import { useEffect, useState } from "react";
import { FoodsUseCases } from "../../domain/use-cases/FoodsUseCases";

interface FoodListComponentProps {
  foodType: number;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}
export const FoodListComponent = ({foodType, refresh, setRefresh} : FoodListComponentProps) => {
  const theme = useTheme();
  const [foods, setFoods] = useState<FoodModel[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchFoods = async () => {
    try {
      const foodList = await FoodsUseCases(foodType);
      setFoods(foodList);
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch foods:", error);
    } finally {
      setLoading(false);
    }
  }
    fetchFoods();
    setRefresh(false);
  }, [foodType, refresh, setRefresh])
  const styles = StyleSheet.create({
    activityIndicator: {
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
  return (
    <ScrollView style={{ flex: 1,  backgroundColor: theme.colors.background}}>
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
                setRefresh={setRefresh}
              />
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              flex: 1,
              backgroundColor: theme.colors.background,
            }}
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={() => setRefresh(true)}
                colors={[theme.colors.primary]}
                tintColor={theme.colors.primary}
              />
            }
          />) : (
            <NoFoodComponent />
          )
      }
    </ScrollView>
  );
};