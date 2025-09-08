
import { addNewHistory, getHistory } from "../../data/api/HistoryApi";
import { FoodModel } from "../models/FoodModel";
import { HistoryInfo } from "../models/HistoryInfo";

export const getHistoryDay = async (date: string) => {
    try {
        let response: HistoryInfo[] = [];
        response = await getHistory(date) as unknown as HistoryInfo[];
        return response;
    } catch (e) {
    }
    return [];

}

export const addHistory = async (food: FoodModel) => {
    try {
        const res = await addNewHistory(food);
        return res;
    } catch (e) {
    }

}