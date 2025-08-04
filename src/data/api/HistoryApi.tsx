
import { HistoryInfo } from "../../domain/models/HistoryInfo";

export const getHistory = (date: string): HistoryInfo => {
    let list: HistoryInfo =
        {
            date: "2025-08-04",
            breakfast: {
                id: 1,
                name: "Oatmeal with Fruits",
                description: "A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits.",
                type: 1,
            },
            lunch: {
                id: 2,
                name: "Grilled Chicken Salad",
                description: "A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits.",
                type: 2,
            },
            dinner: {
                id: 3,
                name: "Salmon with Quinoa",
                description: "A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits. A healthy bowl of oatmeal topped with fresh fruits.",
                type: 3,
            },
        }
    return list;
}