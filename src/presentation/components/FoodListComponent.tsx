import { FlatList } from "react-native";
import { FoodCardComponent } from "./FoodCardComponent";
import { useTheme } from "react-native-paper";
import { FoodModel } from "../../domain/models/FoodModel";

export const FoodListComponent = ({ foods }: { foods: FoodModel[] }) => {
  const theme = useTheme();
  return (
    <FlatList
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
        backgroundColor: theme.colors.background,
        paddingBottom: 400,
      }}
    />
  );
};