
import { supabase } from '../../lib/supabase';
import { FoodModel } from './../../domain/models/FoodModel';

export const getFoods = async (foodType: number) => {
    const breakfast: FoodModel[] = []
    try{
        const { data, error } = await supabase.from('foods').select().order('id').eq('type', foodType);  
        if (error) {
        throw error;
        }
        if (data && data.length > 0) {
            data.map((food: FoodModel) => {
                breakfast.push(food)
            })
        }
    }catch(e){
        throw e;
    }
    return breakfast;
}

export const addFood = async (food: FoodModel) => {
    const obj = {
        name: food.name,
        description: food.description,
        type: food.type
    }
    const { error } = await supabase.from('foods').insert(obj);
    if (error) {
        throw error;
    }

}
export const updateFood = async (food: FoodModel) => {
    const { error } = await supabase.from('foods').upsert(food);
    if (error) {
        throw error;
    }

}

export const deleteFood = async (food: FoodModel) => {
    const { error } = await supabase.from('foods').delete().eq('id', food.id);
    if (error) {
        throw error;
    }
}
