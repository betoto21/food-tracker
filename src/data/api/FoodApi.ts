import { FoodModel } from './../../domain/models/FoodModel';

export const getBreackfast = (): FoodModel[] => {
    let list: FoodModel[] = [
        {
            id: 1,
            name: "huevos con jamon",
            description: "2 huevos con jamon, 50 gramos de jamon y un chorrito de aceite",
            type: 1
        },
        {
            id: 2,
            name: "2 quesadillas",
            description: "quesadillas con queso y jamon",
            type: 1
        },
        {
            id: 3,
            name: "sandwich",
            description: "un sandwich",
            type: 1
        }
    ];
    return list;
}

export const getLunch = (): FoodModel[] => {
    let list: FoodModel[] = [
        {
            id: 1,
            name: "caldo de pollo",
            description: "200 gramos de pollo con verduras",
            type: 2
        },
        {
            id: 2,
            name: "res con brocoli",
            description: "200 gramos de carne de res",
            type: 2
        },
        {
            id: 3,
            name: "pollo con verdura",
            description: "200 gramos de pollo con verduras",
            type: 2
        }
    ];
    return list;
}

export const getDinner = (): FoodModel[] => {
    let list: FoodModel[] = [
        {
            id: 1,
            name: "Poll a la plancha",
            description: "200 gramos de pollo a la plancha con 50 gramos de arroz",
            type: 3
        },
        {
            id: 2,
            name: "2 quesadillas",
            description: "quesadillas con queso y jamon",
            type: 3
        },
        {
            id: 3,
            name: "sandwich",
            description: "un sandwich",
            type: 3
        }
    ];
    return list;
}