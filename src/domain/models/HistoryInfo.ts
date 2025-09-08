import { FoodModel } from "./FoodModel";

export interface HistoryInfo{
    created_at: string;
    foodType: number;
    foods: FoodModel;

}