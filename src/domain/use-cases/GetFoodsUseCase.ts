import { FoodModel } from "../models/FoodModel";
import { getBreackfast, getDinner, getFoods, getLunch } from "../../data/api/FoodApi";


export const GetFoodsUseCase = (): FoodModel[][] => {
    const breakfast = getBreackfast();
    const lunch = getLunch();
    const dinner = getDinner();

    return [breakfast, lunch, dinner];
}