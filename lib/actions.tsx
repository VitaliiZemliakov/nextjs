"use server";

import { redirect } from "next/navigation";
import { extractMeal, isInvalidText } from "./meal-utils";
import { saveMeal } from "./meals";

export interface ActionState {
    message: string | null;
}

export async function shareMeal(
    prevState: ActionState,
    formdata: FormData,
): Promise<ActionState> {
    const meal = extractMeal(formdata);

    if (meal?.image.size === 0) {
        return { message: "Invalid image" };
    }

    const invalidMessages: string[] = [];

    if (isInvalidText(meal.title)) {
        invalidMessages.push("Invalid title");
    }
    if (isInvalidText(meal.summary)) {
        invalidMessages.push("Invalid summary");
    }
    if (isInvalidText(meal.instructions)) {
        invalidMessages.push("Invalid instructions");
    }
    if (isInvalidText(meal.creator_email)) {
        invalidMessages.push("Invalid email");
    }

    if (invalidMessages.length > 0) {
        return { message: invalidMessages.join(", ") };
    }

    await saveMeal(meal);

    redirect("/meals");
}
