
import { FoodModel } from "../../domain/models/FoodModel";
import { HistoryInfo } from "../../domain/models/HistoryInfo";
import { supabase } from "../../lib/supabase";

export const getHistory = async (date: string) => {
    const dateFormat = getFormatDate(date);
    
    try {
        const { data, error } = await supabase
            .from("foodHistory")
            .select(`
                created_at,
                foodType,
                foods ( name, description, type )
            `)
            .eq("created_at", dateFormat)
            .in("foodType", [1, 2, 3])
            .order("created_at", { ascending: false });
        if (error) {
            throw error;
        }
        return (data as unknown as HistoryInfo[]) || [];

    } catch (e) {
        throw e;
    }
}

export const addNewHistory = async (food : FoodModel) => {
    const obj = {
        foodType: food.type,
        foodId: food.id,
        created_at: getFomatDate()
    
    }
    const { error } = await supabase.from('foodHistory').insert(obj);
    if (error) {
        throw error;
    }
}

function getFormatDate(date: string){
    const splitDate = date.split('/');
    return `${splitDate[0]}-${splitDate[1]}-${splitDate[2]}`;
}

function getFomatDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}