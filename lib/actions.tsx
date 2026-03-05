"use server";

import { redirect } from "next/navigation";
import { extractMeal, isInvalidText } from "./meal-utils";
import { saveMeal } from "./meals";

interface ActionState {
    message: string | null;
}

export async function shareMeal(formdata: FormData): Promise<ActionState> {
    const meal = extractMeal(formdata);

    if (meal?.image.size === 0) {
        return { message: "Invalid image" };
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email)
    ) {
        return { message: "Invalid input" };
    }

    await saveMeal(meal);

    redirect("/meals");
}
