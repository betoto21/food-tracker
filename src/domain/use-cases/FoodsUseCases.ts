import { FoodModel } from "../models/FoodModel";
import { addFood, deleteFood, getFoods, updateFood } from "../../data/api/FoodApi";
import Toast from "react-native-toast-message";


export const FoodsUseCases = async (foodType: number): Promise<FoodModel[]> => {
    try {
        let foods: FoodModel[] = [];

        foods = await getFoods(foodType) ?? [];
        return foods;
    } catch (e) {
    Toast.show({
            type: "error",
            text1: "Hubo un error al obtener los alimentos!",
            position: "bottom",
            visibilityTime: 3000,
        })
    return [];  
   }


}
export const AddFoodUseCase = async (food: FoodModel) => {
    try{
        const res = await addFood(food);
        Toast.show({
            type: "success",
            text1: "se guardo la comida con exito!",
            position: "bottom",
            visibilityTime: 3000,
        })
        return res;
    } catch (e) {
        Toast.show({
            type: "error",
            text1: "Hubo un error al guardar el alimento!",
            position: "bottom",
            visibilityTime: 3000,
        })
    }
}
export const UpdateFoodUseCase = async (food: FoodModel) => {
    try{
        const res = await updateFood(food);
        Toast.show({
            type: "success",
            text1: "Se guardo la comida con exito!",
            position: "bottom",
            visibilityTime: 3000,
        })
        return res;
    } catch (e) {
        Toast.show({
            type: "error",
            text1: "Hubo un error al guardar el alimento!",
            position: "bottom",
            visibilityTime: 3000,
        })
    }
}
export const DeleteFoodUseCase = async (food: FoodModel) => {
    try{
        const res = await deleteFood(food);
        Toast.show({
                    type: "success",
                    text1: "Se eliminó la comida con exito!",
                    position: "bottom",
                    visibilityTime: 3000,
                })
        return res;
    } catch (e) {
        Toast.show({
            type: "error",
            text1: "Hubo un error al guardar el alimento!",
            position: "bottom",
            visibilityTime: 3000,
        })
    }
}