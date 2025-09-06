
import { supabase } from '../../lib/supabase';
import { FoodModel } from './../../domain/models/FoodModel';

export const getFoods = async (foodType: number) => {
    const breakfast: FoodModel[] = []
    try{
        const { data, error } = await supabase.from('foods').select().order('id').eq('type', foodType);  
        if (error) {
          return;
        }
        if (data && data.length > 0) {
            data.map((food: FoodModel) => {
                breakfast.push(food)
            })
        }
    }catch(e){
    }
    return breakfast;
}

export const addFood = async (food: FoodModel) => {
    const obj = {
        name: food.name,
        description: food.description,
        type: food.type
    }
    const { data, error } = await supabase.from('foods').insert(obj);
    if (error) {
        return;
    }

}
export const updateFood = async (food: FoodModel) => {
    console.log('Editing: ',food);
    const { data, error } = await supabase.from('foods').upsert(food);
    if (error) {
        return;
    }

}

export const deleteFood = async (food: FoodModel) => {
    const { data, error } = await supabase.from('foods').delete().eq('id', food.id);
    if (error) {
        return;
    }
}
