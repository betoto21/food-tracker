import { FoodModel } from "./FoodModel";

export interface HistoryInfo{
    date: string;
    breakfast: FoodModel;
    lunch: FoodModel;
    dinner: FoodModel;
}