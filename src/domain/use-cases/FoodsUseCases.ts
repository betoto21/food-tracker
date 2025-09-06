import { FoodModel } from "../models/FoodModel";
import { addFood, deleteFood, getFoods, updateFood } from "../../data/api/FoodApi";


export const FoodsUseCases = async (foodType: number): Promise<FoodModel[]> => {
    let foods: FoodModel[] = [];

    foods = await getFoods(foodType) ?? [];
    return foods;


}
export const AddFoodUseCase = async (food: FoodModel) => {
    const res = await addFood(food);
    return res;
}
export const UpdateFoodUseCase = async (food: FoodModel) => {
    const res = await updateFood(food);
    return res;
}
export const DeleteFoodUseCase = async (food: FoodModel) => {
    const res = await deleteFood(food);
    return res;
}