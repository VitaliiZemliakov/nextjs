import { Meal } from "@/components/meals/meal-item";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error('sorry, we have to stop you here')
    return db.prepare('SELECT * FROM meals').all() as Meal[];
}