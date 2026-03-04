"use server";

import { redirect } from "next/navigation";
import { extractMeal } from "./meal-utils";
import { saveMeal } from "./meals";

export async function shareMeal(formdata: FormData): Promise<void> {
    const meal = extractMeal(formdata);

    console.log(meal);

    await saveMeal(meal);

    redirect("/meals");
}
