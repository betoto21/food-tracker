
import Toast from "react-native-toast-message";
import { addNewHistory, getHistory } from "../../data/api/HistoryApi";
import { FoodModel } from "../models/FoodModel";
import { HistoryInfo } from "../models/HistoryInfo";

export const getHistoryDay = async (date: string) => {
    try {
        let response: HistoryInfo[] = [];
        response = await getHistory(date) as unknown as HistoryInfo[];
        return response;
    } catch (e) {
        Toast.show({
            type: "error",
            text1: "Hubo un error al obtener el historial!",
            position: "bottom",
            visibilityTime: 3000,
        })
    }
    return [];

}

export const addHistory = async (food: FoodModel) => {
    try {
        const res = await addNewHistory(food);
        Toast.show({
            type: "success",
            text1: "Se guardo el registro con exito!",
            position: "bottom",
            visibilityTime: 3000,
        })
        return res;
    } catch (e) {
        Toast.show({
            type: "error",
            text1: "Hubo un error al guardar el registro !",
            position: "bottom",
            visibilityTime: 3000,
        })
    }

}